import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as dotenv from 'dotenv';
import { z } from 'zod';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const HYGRAPH_API_URL = process.env.VITE_HYGRAPH_URL;

if (!HYGRAPH_API_URL) {
  console.error("❌ VITE_HYGRAPH_URL is missing in environment variables.");
  process.exit(1);
}

// Zod schema for validation
const projectSchema = z.object({
  title: z.string(),
  slug: z.string(),
  coverImage: z.object({
    url: z.string().url(),
  }),
  images: z.array(z.object({
    url: z.string().url(),
  })).optional(),
  completedAt: z.string().optional().nullable(),
  category: z.string(),
  excerpt: z.string(),
  description: z.string().optional().nullable(),
  caseStudy: z.string().optional().nullable(),
  liveUrl: z.string().url().optional().nullable(),
});

const responseSchema = z.object({
  data: z.object({
    projects: z.array(projectSchema),
  }),
});

type Project = z.infer<typeof projectSchema>;

async function fetchProjects() {
  const query = `
    query Projects {
      projects(first: 9999, stage: PUBLISHED) {
        title
        slug
        coverImage {
          url(
            transformation: {
              image: { resize: { width: 800 }, quality: { value: 70 } }
              document: { output: { format: webp } }
            }
          )
        }
        images {
          url(
            transformation: {
              image: { resize: { width: 800 }, quality: { value: 70 } }
              document: { output: { format: webp } }
            }
          )
        }
        completedAt
        category
        excerpt
        description
        caseStudy
        liveUrl
      }
    }
  `;

  console.log("Fetching projects from Hygraph...");
  const response = await fetch(HYGRAPH_API_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error(`Hygraph HTTP error: ${response.status} ${response.statusText}`);
  }

  const json = await response.json();
  
  if (json.errors) {
    console.error("GraphQL errors:", json.errors);
    throw new Error("GraphQL returned errors");
  }

  const parsed = responseSchema.safeParse(json);
  
  if (!parsed.success) {
    console.error("❌ Data validation failed!");
    console.error(parsed.error.format());
    process.exit(1);
  }

  return parsed.data.data;
}

async function generate() {
  try {
    const data = await fetchProjects();
    
    const generatedDir = path.resolve(__dirname, '../generated');
    if (!fs.existsSync(generatedDir)) {
      fs.mkdirSync(generatedDir, { recursive: true });
    }

    // Write JSON
    fs.writeFileSync(
      path.resolve(generatedDir, 'website.json'),
      JSON.stringify(data, null, 2)
    );
    
    // Write Types
    const typesContent = `// Auto-generated file. Do not edit manually.

export interface Project {
  title: string;
  slug: string;
  coverImage: {
    url: string;
  };
  images?: {
    url: string;
  }[];
  completedAt?: string | null;
  category: string;
  excerpt: string;
  description?: string | null;
  caseStudy?: string | null;
  liveUrl?: string | null;
}

export interface WebsiteData {
  projects: Project[];
}
`;
    fs.writeFileSync(path.resolve(generatedDir, 'types.ts'), typesContent);

    // Write exported data TS
    const websiteContent = `// Auto-generated file. Do not edit manually.
import data from './website.json' assert { type: 'json' };
import type { WebsiteData } from './types';

export const website = data as WebsiteData;
`;
    fs.writeFileSync(path.resolve(generatedDir, 'website.ts'), websiteContent);

    // Write index TS
    const indexContent = `// Auto-generated file. Do not edit manually.
export * from './types';
export * from './website';
`;
    fs.writeFileSync(path.resolve(generatedDir, 'index.ts'), indexContent);

    console.log("✅ Successfully generated build-time CMS data!");
  } catch (err) {
    console.error("❌ Failed to generate build-time data:", err);
    process.exit(1);
  }
}

generate();
