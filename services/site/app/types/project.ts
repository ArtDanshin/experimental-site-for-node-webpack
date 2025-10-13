export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  image: string;
  technologies: string[];
  links: {
    github?: string;
    demo?: string;
    website?: string;
  };
  status: 'completed' | 'in-progress' | 'planned';
  featured: boolean;
  createdAt: string;
  updatedAt: string;
  screenshots: string[];
}

export interface ProjectFilters {
  status?: string;
  technologies?: string[];
  featured?: boolean;
  search?: string;
}

export interface ProjectSearchResult {
  projects: Project[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}
