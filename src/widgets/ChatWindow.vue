<script setup lang="ts"></script>

<template>
  <div class="chat__window">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.chat__window {
  margin-top: 20px;
  width: 100%;
  height: 559px;
  background-color: #d9d9d9;
  border-radius: 16px;
}
</style>
