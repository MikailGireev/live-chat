<script setup lang="ts">
import UiTypography from './UiTypography.vue';

interface Props {
  onSubmit: (event: Event) => void;
}

const { onSubmit = () => {} } = defineProps<Props>();
</script>

<template>
  <button @click="onSubmit" class="button">
    <UiTypography><slot></slot></UiTypography>
  </button>
</template>

<style scoped lang="scss">
.button {
  cursor: pointer;
  padding: 8px 78px;
  border-radius: 8px;
  border: none;
  background-color: #06c1ab;
}
</style>
