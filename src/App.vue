<template>
  <TheNavigation />
  <div>
    <router-view v-slot="{ Component, route }">
      <Transition name="page-opacity" mode="out-in">
        <div :key="route.name">
          <component :is="Component"></component>
        </div>
      </Transition>
    </router-view>
  </div>
  <TheFooter />
</template>

<script>
import TheNavigation from "./components/TheNavigation.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  components: {
    TheNavigation,
    TheFooter
  }
};

// Script ini untuk DarkMode.vue
if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
</script>
<style>
  .page-opacity-enter-active,
  .page-opacity-leave-active {
    transition: 300ms ease all;
  }
  .page-opacity-enter-from,
  .page-opacity-leave-to {
    opacity: 0;
  }
</style>