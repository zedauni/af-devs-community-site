import { ref, getCurrentInstance, onUnmounted } from 'vue';

/**
 * Composable to handle single and double-click events.
 * 
 * This function ensures that:
 * - A single click is only executed if no second click occurs within the given delay.
 * - A double-click cancels the single click action if detected in time.
 * - The timeout is properly cleared when the component is unmounted.
 * 
 * @param onClick - Callback function executed on a single click.
 * @param onDoubleClick - Callback function executed on a double-click.
 * @param delay - Time threshold (in milliseconds) to differentiate between single and double clicks (default: 250ms).
 * @returns An object containing the `handleClick` function to be used in the component.
 */
export function useClickHandler(
  onClick: () => void,
  onDoubleClick: () => void,
  delay = 250
) {
  // Holds a reference to the timeout for detecting a double-click
  const clickTimeout = ref<NodeJS.Timeout | null>(null);

  /**
   * Handles both single and double-click events.
   * - If a second click happens within the delay, the single click is canceled, and the double-click action is executed.
   * - If no second click occurs, the single click action is executed after the delay.
   */
  const handleClick = () => {
    if (clickTimeout.value) {
      // A second click was detected within the delay, cancel the single click
      clearTimeout(clickTimeout.value); // Cancel single click action
      clickTimeout.value = null;
      onDoubleClick(); // Execute double-click action
    } else {
      // Start the timeout to detect a second click
      clickTimeout.value = setTimeout(() => {
        onClick(); // Execute single click action
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
