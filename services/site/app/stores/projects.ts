import { defineStore } from 'pinia';

import type { Project, ProjectFilters } from '@/types/project';

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref<Project[]>([]);
  const currentProject = ref<Project | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const { getProjects, getProject, getFeaturedProjects } = useProjects();

  const fetchProjects = async (filters?: ProjectFilters) => {
    loading.value = true;
    error.value = null;

    try {
      const result = await getProjects(filters);
      projects.value = result.projects;
    } catch (error_) {
      error.value = error_ instanceof Error ? error_.message : 'Failed to fetch projects';
    } finally {
      loading.value = false;
    }
  };

  const fetchProject = async (id: string) => {
    loading.value = true;
    error.value = null;

    try {
      const project = await getProject(id);
      currentProject.value = project;
    } catch (error_) {
      error.value = error_ instanceof Error ? error_.message : 'Failed to fetch project';
    } finally {
      loading.value = false;
    }
  };

  const fetchFeaturedProjects = async (limit = 3) => {
    loading.value = true;
    error.value = null;

    try {
      const featured = await getFeaturedProjects(limit);
      projects.value = featured;
    } catch (error_) {
      error.value = error_ instanceof Error ? error_.message : 'Failed to fetch featured projects';
    } finally {
      loading.value = false;
    }
  };

  return {
    projects: readonly(projects),
    currentProject: readonly(currentProject),
    loading: readonly(loading),
    error: readonly(error),
    fetchProjects,
    fetchProject,
    fetchFeaturedProjects,
  };
});
