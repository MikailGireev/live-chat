<script setup lang="ts">
import type { Props } from '../types/avatar';

const { src, width, height, alt = 'Avatar' } = defineProps<Props>();
</script>

<template>
  <div><img class="avatar" :src="src" :alt="alt" :style="{ width: width, height: height }" /></div>
</template>

<style scoped lang="scss">
.avatar {
  padding: 13px;
  background-color: #ffffff;
  border-radius: 50%;
  cursor: pointer;
}
</style>
