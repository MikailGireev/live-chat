<script setup lang="ts">
defineProps<{ isSide?: boolean }>();
</script>

<template>
  <div class="chat__bubble" :class="{ left: !isSide, right: isSide }">
    <slot name="left"> </slot>
    <slot name="right"> </slot>
  </div>
</template>

<style scoped lang="scss">
.chat__bubble {
  display: flex;
  align-items: center;
  gap: 10px;
}

.right {
  flex-direction: row-reverse;
  text-align: right;
}

.left {
  flex-direction: row;
  text-align: left;
}
</style>
