<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import { shallowRef, watch } from 'vue';
import { useRoute } from 'vue-router';

import DefaultLayout from './DefaultLayout';

export default {
  name: 'DynamicLayout',
  setup()
  {
    const layout = shallowRef(DefaultLayout);
    const route = useRoute();

    watch(
      () => route.meta,
      async meta => layout.value = meta.layout || DefaultLayout,
      { immediate: true },
    );

    return { layout };
  }
}
</script>
