<script setup lang="ts">
import UiAvatar from '@/shared/ui/UiAvatar.vue';
import UiBubble from '@/shared/ui/UiBubble.vue';
import UiContainer from '@/shared/ui/UiContainer.vue';
import UiTypography from '@/shared/ui/UiTypography.vue';
import UiInput from '@/shared/ui/UiInput.vue';
import UiButton from '@/shared/ui/UiButton.vue';

import ChatBubble from '@/features/chat/ChatBubble.vue';
import ChatWindow from '@/features/chat/ChatWindow.vue';
import MessageCard from '@/features/chat/MessageCard.vue';

import { ref, watchEffect } from 'vue';
import { useChatStore } from '@/app/stores';

const inputMessage = ref('');
const store = useChatStore();

const onSubmit = (event: Event) => {
  event.preventDefault();
  store.addMessage('me', inputMessage.value);
  inputMessage.value = '';
};
const onChange = (value: string) => {
  if (value.trim() !== '') {
    inputMessage.value = value;
  }
};

watchEffect(() => {
  if (inputMessage.value.length > 0 && inputMessage.value.trim() !== '') {
    store.setBubbleWidth(inputMessage.value.length);
  }
});
</script>

<template>
  <div class="homepage">
    <UiContainer>
      <UiTypography color="green" class="tag__h1" tag-name="h1" size="l" weight="bold"
        >Live chat</UiTypography
      >
      <ChatWindow class="chat">
        <div class="left">
          <ChatBubble>
            <template v-slot:left>
              <UiAvatar src="../assets/images/boy-1.png" alt="Girl" />
              <UiBubble>
                <UiTypography color="black" class="tag__p" size="m" weight="bold"
                  >Hello</UiTypography
                >
              </UiBubble>
            </template>
          </ChatBubble>
        </div>
        <div v-for="message in store.chatMessage" :key="message.user" class="right">
          <ChatBubble is-side>
            <template v-slot:right>
              <UiAvatar src="../assets/images/girl-1.png" alt="Girl" />
              <UiBubble class="ui-bubble">
                <UiTypography
                  :style="{ minWidth: store.bubbleWidth + 'px' }"
                  color="black"
                  class="tag__p"
                  size="m"
                  weight="bold"
                  >{{ message.message }}</UiTypography
                >
              </UiBubble>
            </template>
          </ChatBubble>
        </div>
      </ChatWindow>
      <div class="message">
        <MessageCard class="message__card">
          <UiInput :onChange="onChange" :onSubmit="onSubmit" />
          <UiButton :onSubmit="onSubmit">Send</UiButton>
        </MessageCard>
      </div>
    </UiContainer>
  </div>
</template>

<style scoped lang="scss">
.tag__h1 {
  text-align: center;
}

.chat {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  align-items: flex-end;
  overflow-y: auto;
}

.chat::-webkit-scrollbar {
  width: 8px; /* Ширина скролл-бара */
}

.right .tag__p {
  text-align: left;
  padding: 20px;
}

.left .tag__p {
  text-align: left;
  margin-top: 24px;
  margin-left: 26px;
}

.right :deep(.bubble) {
  width: auto;
  height: auto;
  border-radius: 35px 35px 0 35px;
}

.left :deep(.bubble) {
  border-radius: 35px 35px 35px 0px;
}

.message__card {
  display: flex;
  gap: 16px;
}

.ui-bubble {
  // width: 300px;
  word-break: break-word;
  white-space: normal;
  overflow-wrap: break-word;
}
</style>
