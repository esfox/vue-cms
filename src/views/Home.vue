<template>
  <div class="home">
    <h1 class="mb3">This is home</h1>
    <button @click="toggle">Change Theme</button>
  </div>
</template>

<script>
import { useTheme } from '../hooks/useTheme';

export default {
  setup()
  {
    const { toggle } = useTheme();
    return {
      toggle,
    };
  },
}
</script>
