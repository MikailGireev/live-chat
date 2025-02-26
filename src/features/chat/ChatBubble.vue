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
  gap: 21px;
  padding: 10px 10px;
}

.right {
  flex-direction: row-reverse;
  align-self: flex-end;
}

.left {
  align-self: flex-start;
}
</style>
