export default defineNuxtLink({
  componentName: "AppLink",
  externalRelAttribute: "noopener noreferrer",
  activeClass: "app-link-active",
  exactActiveClass: "app-link-exact-active",
  trailingSlash: "remove",
  prefetch: true,
  prefetchedClass: "app-link-prefetched",
  prefetchOn: { visibility: true, interaction: true },
});
