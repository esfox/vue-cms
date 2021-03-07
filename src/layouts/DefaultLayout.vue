<template>
  <div class="layout h-100">
    <nav class="bg-primary">
      <h1 class="flex items-center justify-center fw7 ma0 pa3 bg-primary-darker">
        <img src="../assets/logo.png" alt="Vue logo">
        ue CMS
      </h1>
      <ul>
        <li>
          <router-link
            v-for="{ path, name } in navLinks"
            v-bind:key="path"
            class="db pointer ph4 pv3"
            :class="route.path === path ? 'active' : ''"
            :to="path"
          >
            {{ name }}
          </router-link>
        </li>
      </ul>
    </nav>
    <div>
      <header class="bg-primary-dark">
        <h1 class="ma0 pa3">{{ route.name }}</h1>
      </header>
      <div class="pa4">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router';

export default
{
  setup()
  {
    const { getRoutes } = useRouter();
    const route = useRoute();

    const navLinks = [];
    for(const { path, name, meta } of getRoutes())
    {
      if(meta.nav)
        navLinks.push({ path, name });
    }

    return {
      navLinks,
      route,
    }
  },
}
</script>

<style lang="scss" scoped>

.layout {
  display: grid;
  grid-template-columns: min(15%) 1fr;
}

h1 {

  img {
    height: 4rem;
  }
}

ul a {
  text-decoration: none;

  &:hover {
    background: var(--color-primary-light);
  }

  &.active {
    background: var(--color-background-light);
    color: var(--color-foreground-dark);
  }
}

</style>
