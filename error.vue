<template>
  <NuxtLayout name="error">
    <div class="flex _min-h-screen flex-col items-center justify-center p-4 mt-12">
      <div
        class="w-full max-w-md overflow-hidden rounded-lg shadow-lg bg-secondary-100/50 dark:bg-secondary-100/15"
      >
        <div class="p-6">
          <h1 class="text-3xl font-bold text-secondary">
            {{ error.statusCode }}
          </h1>
          <h2
            class="mt-2 text-xl font-semibold text-slate-800 dark:text-slate-200"
          >
            {{ error.message }}
          </h2>
          <p class="mt-4 text-slate-600 dark:text-slate-400">
            {{ statusMessage }}
          </p>
          <button
            class="mt-6 rounded-md border border-gray-400 dark:border-gray-600 px-4 py-2 text-bw-invert transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
            @click="handleError"
          >
            Back to home
          </button>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const props = defineProps({
  error: {
    type: Object,
    required: true,
  },
});

const statusMessage = computed(() => {
  switch (props.error.statusCode) {
    case 404:
      return "The page you are looking for doesn't exist or has been moved.";
    case 403:
      return "You don't have permission to access this resource.";
    case 500:
      return "Our server had an error while processing your request.";
    default:
      return "Something went wrong.";
  }
});

// Error handling function - clears the error and returns to homepage
const handleError = () => {
  clearError({ redirect: "/" });
};
</script>
