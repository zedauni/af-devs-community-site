/**
 * Scroll animation directive
 */
import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("animate-on-scroll", {
    mounted(el: HTMLElement, binding: any) {
      // Default animation classes
      const defaultClasses = {
        hidden: "opacity-0 translate-y-10",
        visible: "opacity-100 translate-y-0",
        transition: "transition-transform duration-[var(--transition-duration)] ease-out",
        // hidden: "opacity-0 translate-y-10",
        // visible: "opacity-100 translate-y-0",
        // transition: "transition-all duration-[var(--transition-duration)] ease-out",
      };

      // Merge user-defined classes with defaults
      const options = {
        hidden: binding.value?.hidden || defaultClasses.hidden,
        visible: binding.value?.visible || defaultClasses.visible,
        transition: binding.value?.transition || defaultClasses.transition,
      };

      // Apply initial hidden state and transition properties
      el.classList.add(
        ...options.hidden.split(" "),
        ...options.transition.split(" ")
      );

      // Observe the element for intersection
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Element is in the viewport
          if (entry.isIntersecting) {
            el.classList.add(...options.visible.split(" ")); // Apply visible class
            el.classList.remove(...options.hidden.split(" ")); // and remove hidden class
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(el);
    },
  });
});
