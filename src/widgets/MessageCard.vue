<script setup lang="ts"></script>

<template>
  <div class="message__card">
    <slot name="input"></slot>
    <slot name="button"></slot>
  </div>
</template>

<style scoped lang="scss">
.message__card {
  margin-top: 15px;
  width: 100%;
  padding: 12px 20px;
  background-color: #d9d9d9;
  border-radius: 12px;
}
</style>
