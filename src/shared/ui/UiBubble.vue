<script setup lang="ts"></script>

<template>
  <div class="bubble">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.bubble {
  width: 212px;
  height: 63px;
  background-color: #ffffff;
  margin: 10px 0 10px 10px;
}

slot {
  margin-right: 40px;
}
</style>
