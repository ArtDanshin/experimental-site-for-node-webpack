export const setupNavMain = () => {
  const route = useRoute();
  const uiStore = useUIStore();

  const isActiveRoute = (href: string) => {
    if (href === '/') {
      return route.path === '/';
    }
    return route.path.startsWith(href);
  };

  return {
    isActiveRoute,
    uiStore,
  };
};
