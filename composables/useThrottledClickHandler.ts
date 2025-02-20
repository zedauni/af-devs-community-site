import { ref, getCurrentInstance, onUnmounted } from 'vue';

/**
 * Composable to handle throttled click events.
 * 
 * This function ensures that:
 * - A single click is only executed within the given delay.
 * - If a second click is detected in time, it is ignored.
 * - The timeout is properly cleared when the component is unmounted.
 * 
 * @param onClick - Callback function executed on a throttled click.
 * @param delay - Time threshold (in milliseconds) to throttle clicks (default: 250ms).
 * @returns An object containing the `handleClick` function to be used in the component.
 */
export function useThrottledHandler(
  onClick: () => void,
  delay = 50
) {
  // Holds a reference to the timeout for detecting a double-click
  const clickTimeout = ref<NodeJS.Timeout | null>(null);

  /**
   * Handles click events.
   * - If a second click happens within the delay, the click is ignored.
   */
  const handleClick = () => {
    if (clickTimeout.value) {
      // A second click was detected within the delay and ignored,
    } else {
      // Start the timeout to detect and ignore a second click
      clickTimeout.value = setTimeout(() => {
        onClick(); // Execute single click action within the delay
        clickTimeout.value = null;
      }, delay);
    }
  };

  
  /**
   * Clear any existing timeout when the component using this composable is unmounted.
   */
  if (getCurrentInstance()) { // Ensure that we are inside a Vue component before using lifecycle hooks
    onUnmounted(() => {
      if (clickTimeout.value) clearTimeout(clickTimeout.value);
    });
  }

  return { handleClick };
}
