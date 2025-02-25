<script setup lang="ts">
import type { Props } from '../types/typography';

const { size = 'm', tagName = 'p', weight = 'normal' } = defineProps<Props>();
</script>

<template>
  <component
    :is="tagName"
    :class="['typography', `text-${size}`, `tag__${tagName}`, `weight-${weight}`]"
    ><slot></slot
  ></component>
</template>

<style scoped lang="scss">
.tag__h1 {
  font-size: 32px;
  color: #06c1ab;
}

.tag__p {
  font-size: 14px;
  color: #000000;
}

.typography.weight-normarl {
  font-weight: normal;
}

.typography.weight-bold {
  font-weight: bold;
}
</style>
