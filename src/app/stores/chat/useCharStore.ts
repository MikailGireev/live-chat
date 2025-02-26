import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useChatStore = defineStore('chat', () => {
  const chat = reactive<string[]>([]);

  const addMessage = (message: string) => {
    chat.push(message);
  };

  return { addMessage, chat };
});
