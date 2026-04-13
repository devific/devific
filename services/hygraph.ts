import { request, gql } from "graphql-request";

const HYGRAPH_API_URL = import.meta.env.VITE_HYGRAPH_URL;
const HYGRAPH_TOKEN = import.meta.env.VITE_HYGRAPH_TOKEN;

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
  if (HYGRAPH_TOKEN) {
    headers["Authorization"] = `Bearer ${HYGRAPH_TOKEN}`;
  }
  return headers;
};

export const fetchProjects = async (): Promise<Project[]> => {
  const query = gql`
    query Projects {
      projects(first: 9999, stage: PUBLISHED) {
        title
        slug
        coverImage {
          url
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
          url
        }
        images {
          url
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
