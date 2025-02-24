<script setup lang="ts">
import type { Props } from '../types/avatar';

const { src, width, height, alt = 'Avatar' } = defineProps<Props>();
</script>

<template>
  <div><img :src="src" :alt="alt" :style="{ width: width, height: height }" /></div>
</template>

<style scoped lang="scss"></style>
