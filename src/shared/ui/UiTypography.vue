<script setup lang="ts">
import type { Props } from '../types/typography';

const { size = 'm', tagName = 'p', weight = 'normal', color = 'white' } = defineProps<Props>();
</script>

<template>
  <component
    :is="tagName"
    :class="['typography', `text-${size}`, `tag__${tagName}`, `weight-${weight}`, `${color}`]"
    ><slot></slot
  ></component>
</template>

<style scoped lang="scss">
.tag__h1 {
  font-size: 32px;
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

.typography.white {
  color: #fff;
}

.typography.black {
  color: #000000;
}

.typography.green {
  color: #06c1ab;
}
</style>
