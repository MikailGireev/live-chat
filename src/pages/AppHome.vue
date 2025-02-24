<script setup lang="ts">
import UiAvatar from '@/shared/ui/UiAvatar.vue';
import UiBubble from '@/shared/ui/UiBubble.vue';
import UiContainer from '@/shared/ui/UiContainer.vue';
import UiTypography from '@/shared/ui/UiTypography.vue';
import ChatBubble from '@/widgets/ChatBubble.vue';
import ChatWindow from '@/widgets/ChatWindow.vue';
</script>

<template>
  <div class="homepage">
    <UiContainer>
      <UiTypography class="tag__h1" tag-name="h1" size="l">Live chat</UiTypography>
      <ChatWindow class="chat">
        <div class="left">
          <ChatBubble>
            <template v-slot:left>
              <UiAvatar src="@/assets/images/boy-1.png" alt="Girl" />
              <UiBubble>
                <UiTypography class="tag__p" size="m">Hello</UiTypography>
              </UiBubble>
            </template>
          </ChatBubble>
        </div>
        <div class="right">
          <ChatBubble is-side>
            <template v-slot:right>
              <UiAvatar src="@/assets/images/boy-1.png" alt="Girl" />
              <UiBubble>
                <UiTypography class="tag__p" size="m">Hello</UiTypography>
              </UiBubble>
            </template>
          </ChatBubble>
        </div>
      </ChatWindow>
    </UiContainer>
  </div>
</template>

<style scoped lang="scss">
.tag__h1 {
  text-align: center;
}

.chat {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-end;
}

.right .tag__p {
  text-align: left;
  margin-top: 24px;
  margin-left: 26px;
}

.left .tag__p {
  text-align: left;
  margin-top: 24px;
  margin-left: 26px;
}

.right :deep(.bubble) {
  border-radius: 35px 35px 0 35px;
}

.left :deep(.bubble) {
  border-radius: 35px 35px 35px 0px;
}
</style>
