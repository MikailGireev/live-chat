import type { ChatMessage } from '@/shared/types/chatMessage';
import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

export const useChatStore = defineStore('chat', () => {
  const chatMessage = reactive<ChatMessage[]>([]);
  const bubbleWidth = ref(0);

  const addMessage = (user: string, message: string) => {
    chatMessage.push({ user: 'me', message });
  };

  const setBubbleWidth = (width: number) => {
    bubbleWidth.value = width;
  };

  return { addMessage, chatMessage, setBubbleWidth, bubbleWidth };
});
