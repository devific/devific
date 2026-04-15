import { request, gql } from "graphql-request";

const HYGRAPH_API_URL = import.meta.env.VITE_HYGRAPH_URL;

export interface Project {
  title: string;
  slug: string;
  coverImage: {
    url: string;
  };
  images?: {
    url: string;
  }[];
  completedAt?: string;
  category: string;
  excerpt: string;
  description?: string;
  caseStudy?: string;
  liveUrl?: string;
}

const getHeaders = () => {
  const headers: Record<string, string> = {};
  return headers;
};

export const fetchProjects = async (): Promise<Project[]> => {
  const query = gql`
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
        category
        excerpt
        liveUrl
      }
    }
  `;

  try {
    const data = await request<{ projects: Project[] }>(
      HYGRAPH_API_URL,
      query,
      {},
      getHeaders(),
    );
    return data.projects || [];
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};

export const fetchProjectBySlug = async (
  slug: string,
): Promise<Project | null> => {
  const query = gql`
    query ProjectBySlug($slug: String!) {
      projects(where: { slug: $slug }, stage: PUBLISHED) {
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

  try {
    const data = await request<{ projects: Project[] }>(
      HYGRAPH_API_URL,
      query,
      { slug },
      getHeaders(),
    );
    return data.projects?.[0] || null;
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
};
