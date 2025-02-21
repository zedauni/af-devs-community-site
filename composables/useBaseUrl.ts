/**
 * Returns the full URL by prefixing the provided path with the app's baseURL.
 * @param {string} path - The relative path to prefix.
 * @returns {string} - The full URL with baseURL prefixed.
 */
export const useBaseUrl = (path: string): string => {
  const config = useRuntimeConfig();
  // Remove leading slashes from the path
  const normalizedPath = path.replace(/^\/+/, '');
  // Combine baseURL and normalized path
  return `${config.public.baseURL}${normalizedPath}`;
}