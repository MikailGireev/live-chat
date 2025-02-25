<script setup lang="ts">
import type { Props } from '../types/input';

const {
  type = 'text',
  placeholder = 'Some text',
  onSubmit = () => {},
  onChange = () => {},
} = defineProps<Props>();
</script>

<template>
  <input
    :class="['input', `input__${type}`]"
    :placeholder="placeholder"
    :type="type"
    @input="(input) => onChange((input.target as HTMLInputElement).value)"
    @keyup.enter="onSubmit"
  />
</template>

<style scoped lang="scss">
.input {
  width: 100%;
  height: 32px;
  border: none;
  border-radius: 8px;
  background-color: #ffffff;
  padding: 8px 17px;
}
</style>
