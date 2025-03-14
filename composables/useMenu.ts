export function useMenu() {
  const route = useRoute();
  const router = useRouter();

  type MenuItem = {
    name: string;
    routeName?: string;
    externalUrl?: string;
    current: boolean;
    submenu?: MenuItem[];
  };

  // Create navigation items with named routes or external URLs
  const navigationItems = computed<MenuItem[]>(() => [
    // {
    //   name: "Accueil",
    //   routeName: "home",
    //   current: route.name === "home",
    // },
    {
      name: "Catalogue",
      externalUrl: "#",
      current: false,
      submenu: [
        {
          name: "Catalogue",
          externalUrl: "#",
          current: false,
        },
        {
          name: "SAAS",
          externalUrl: "#",
          current: false,
        },
        {
          name: "Librairies",
          externalUrl: "#",
          current: false,
        },
        {
          name: "Projets",
          externalUrl: "#",
          current: false,
        },
        {
          name: "Ressources",
          externalUrl: "#",
          current: false,
        },
      ],
    },
    {
      name: "Publications",
      routeName: "posts",
      current: isRouteNameActive("posts") || isRouteNameActive("tags"),
      submenu: [
        {
          name: "Publications",
          routeName: "posts",
          current: route.name === "posts",
        },
        {
          name: "Tags",
          routeName: "tags",
          current: route.name === "tags",
        },
      ],
    },
    {
      name: "Rejoindre",
      routeName: "join",
      current: route.name === "join",
    },
    {
      name: "Contact",
      routeName: "contact",
      current: route.name === "contact",
      submenu: [
        {
          name: "Contact",
          routeName: "contact",
          current: route.name === "contact",
        },
        {
          name: "Telegram",
          externalUrl: "https://t.me/devs_forum",
          current: false,
        },
      ],
    },
  ]);

  // Helper function to check if a route name is active
  function isRouteNameActive(name: string): boolean {
    return (
      route.name === name ||
      (typeof route.name === "string" && route.name.startsWith(name + "-"))
    );
  }

  // Helper to get href from route name or external URL
  function getHref(item: MenuItem): string {
    // If it's an external URL, return it directly
    if (item.externalUrl) {
      return item.externalUrl;
    }

    // If it has a route name, resolve it
    if (item.routeName) {
      return router.resolve({ name: item.routeName }).href;
    }

    // Fallback (shouldn't happen with proper data)
    return "/";
  }

  return {
    navigationItems,
    getHref,
  };
}
