<template>
  <router-view />
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { GettersTypes } from '@/store/posts/getters';
import { ActionTypes } from '@/store/posts/actions';
import type { Post } from '@/interfaces';

const store = useStore();
const posts = computed<Post[]>(() => store.getters[GettersTypes.getPosts]);

onMounted(() => {
  if (posts.value.length === 0) store.dispatch(ActionTypes.LOAD_POSTS);
});
</script>

<style lang="scss">
#app {
  padding: 16px;
}
</style>
