<template>
  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-0">
    <h2 class="tracking-tighte text-3xl font-bold text-secondary">
      Commentaires ({{ comments.length }})
    </h2>

    <!-- Comment form -->
    <div class="mt-8 border-t border-gray-200 pt-8 dark:border-gray-700">
      <div class="flex items-start space-x-4">
        <div class="flex-shrink-0">
          <NuxtImg
            class="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Current user"
            placeholder="/images/placeholder.svg"
          />
        </div>
        <div class="min-w-0 flex-1">
          <form @submit.prevent="addComment">
            <div>
              <label for="comment" class="sr-only">Commenter</label>
              <textarea
                id="comment"
                v-model="newComment"
                rows="3"
                class="block w-full rounded-md border border-gray-200 p-2 shadow-sm focus:border focus:border-primary-200 focus:ring-primary-200 sm:text-sm dark:border-gray-600"
                placeholder="Ajouter un commentaire..."
              ></textarea>
            </div>
            <div class="mt-3 flex items-center justify-end">
              <button
                type="submit"
                class="btn btn-primary btn-sm"
                :disabled="!newComment.trim()"
              >
                Commenter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Comments list -->
    <div class="mt-8 space-y-8">
      <div
        v-for="comment in comments"
        :key="comment.id"
        class="border-t border-gray-200 pt-8 dark:border-gray-700"
      >
        <div class="flex items-start space-x-4">
          <div class="flex-shrink-0">
            <NuxtImg
              class="h-10 w-10 rounded-full"
              :src="comment.author.imageUrl"
              :alt="comment.author.name"
              placeholder="/images/placeholder.svg"
            />
          </div>
          <div class="min-w-0 flex-1">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-medium">
                {{ comment.author.name }}
              </h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                <time :datetime="comment.datetime">{{ comment.date }}</time>
              </p>
            </div>
            <div
              class="mt-2 space-y-4 text-sm text-gray-500 dark:text-gray-400"
            >
              <p>{{ comment.content }}</p>
            </div>
            <div class="mt-4 flex items-center space-x-4">
              <button
                type="button"
                class="flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                @click="likeComment(comment.id)"
              >
                <Icon
                  :name="comment.liked ? 'ri:heart-fill' : 'ri:heart-line'"
                  size="1.3em"
                  :class="[
                    comment.liked ? 'text-red-500' : 'text-gray-400',
                    'mr-1.5',
                  ]"
                  aria-hidden="true"
                />
                <span>{{ comment.likes }}</span>
              </button>
              <button
                type="button"
                class="flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                @click="toggleReplyForm(comment.id)"
              >
                <Icon
                  name="ri:chat-quote-line"
                  size="1.3em"
                  class="mr-1.5 text-gray-400"
                  aria-hidden="true"
                />
                <span>Répondre</span>
              </button>
            </div>

            <!-- Reply form -->
            <div v-if="activeReplyId === comment.id" class="mt-6">
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <NuxtImg
                    class="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Current user"
                    placeholder="/images/placeholder.svg"
                  />
                </div>
                <div class="min-w-0 flex-1">
                  <form @submit.prevent="addReply(comment.id)">
                    <div>
                      <label for="reply" class="sr-only"
                        >Ajouter une réponse</label
                      >
                      <textarea
                        id="reply"
                        v-model="newReply"
                        rows="3"
                        class="block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm dark:border-gray-600"
                        placeholder="Ajouter une réponse..."
                      ></textarea>
                    </div>
                    <div class="mt-3 flex items-center justify-end space-x-2">
                      <button
                        type="button"
                        class="btn btn-custom-blue btn-sm"
                        @click="cancelReply"
                      >
                        Annuler
                      </button>
                      <button
                        type="submit"
                        class="btn btn-primary btn-sm"
                        :disabled="!newReply.trim()"
                      >
                        Répondre
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <!-- Replies -->
            <div
              v-if="comment.replies && comment.replies.length > 0"
              class="mt-6 space-y-4 border-l-2 border-gray-100 pl-6 dark:border-gray-700"
            >
              <div
                v-for="reply in comment.replies"
                :key="reply.id"
                class="flex items-start space-x-4"
              >
                <div class="flex-shrink-0">
                  <NuxtImg
                    class="h-8 w-8 rounded-full"
                    :src="reply.author.imageUrl"
                    :alt="reply.author.name"
                    placeholder="/images/placeholder.svg"
                  />
                </div>
                <div class="min-w-0 flex-1">
                  <div class="flex items-center justify-between">
                    <h4 class="text-sm font-medium">
                      {{ reply.author.name }}
                    </h4>
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                      <time :datetime="reply.datetime">{{ reply.date }}</time>
                    </p>
                  </div>
                  <div class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    <p>{{ reply.content }}</p>
                  </div>
                  <div class="mt-2 flex items-center space-x-4">
                    <button
                      type="button"
                      class="flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                      @click="likeReply(comment.id, reply.id)"
                    >
                      <Icon
                        :name="
                          comment.liked ? 'ri:heart-fill' : 'ri:heart-line'
                        "
                        size="1.3em"
                        :class="[
                          comment.liked ? 'text-red-500' : 'text-gray-400',
                          'mr-1.5',
                        ]"
                        aria-hidden="true"
                      />
                      <span>{{ reply.likes }}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Author {
  name: string;
  imageUrl: string;
}

interface Reply {
  id: string;
  author: Author;
  content: string;
  date: string;
  datetime: string;
  likes: number;
  liked: boolean;
}

interface Comment {
  id: string;
  author: Author;
  content: string;
  date: string;
  datetime: string;
  likes: number;
  liked: boolean;
  replies?: Reply[];
}

// Reactive state
const newComment = ref("");
const newReply = ref("");
const activeReplyId = ref<string | null>(null);
const comments = ref<Comment[]>([]);

// Add a new comment
const addComment = () => {
  if (newComment.value.trim()) {
    const comment: Comment = {
      id: Date.now().toString(),
      author: {
        name: "Current User",
        imageUrl:
          "https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      content: newComment.value,
      date: new Date().toLocaleDateString(),
      datetime: new Date().toISOString(),
      likes: 0,
      liked: false,
    };
    comments.value.push(comment);
    newComment.value = "";
  }
};

// Like a comment
const likeComment = (commentId: string) => {
  const comment = comments.value.find((c) => c.id === commentId);
  if (comment) {
    comment.liked = !comment.liked;
    comment.likes += comment.liked ? 1 : -1;
  }
};

// Toggle reply form for a comment
const toggleReplyForm = (commentId: string) => {
  activeReplyId.value = activeReplyId.value === commentId ? null : commentId;
  newReply.value = "";
};

// Add a reply to a comment
const addReply = (commentId: string) => {
  if (newReply.value.trim()) {
    const comment = comments.value.find((c) => c.id === commentId);
    if (comment) {
      const reply: Reply = {
        id: Date.now().toString(),
        author: {
          name: "Current User",
          imageUrl:
            "https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        content: newReply.value,
        date: new Date().toLocaleDateString(),
        datetime: new Date().toISOString(),
        likes: 0,
        liked: false,
      };
      if (!comment.replies) {
        comment.replies = [];
      }
      comment.replies.push(reply);
      newReply.value = "";
      activeReplyId.value = null;
    }
  }
};

// Cancel reply
const cancelReply = () => {
  activeReplyId.value = null;
  newReply.value = "";
};

// Like a reply
const likeReply = (commentId: string, replyId: string) => {
  const comment = comments.value.find((c) => c.id === commentId);
  if (comment && comment.replies) {
    const reply = comment.replies.find((r) => r.id === replyId);
    if (reply) {
      reply.liked = !reply.liked;
      reply.likes += reply.liked ? 1 : -1;
    }
  }
};
</script>

<style scoped>
/* Custom styles if needed */
</style>
