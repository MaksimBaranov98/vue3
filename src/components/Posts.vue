<template>
  <div class="nav">
    <button class="nav-button" @click="setFilter('all')">All</button>

    <button class="nav-button" @click="setFilter('unread')">Unread</button>

    <button class="nav-button" @click="setFilter('read')">Read</button>
  </div>

  <div v-for="{ title, body, id } in filteredPosts" :key="id" :class="getClasses(id)" @click="openPost(id)">
    <div class="title">{{ id }}.{{ title }}</div>

    <div class="post-text">{{ body }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { Components } from '@/router/routes';
import { useStore } from 'vuex';
import { GettersTypes } from '@/store/posts/getters';
import type { Post } from '@/interfaces';

const router = useRouter();
const store = useStore();
const getters = store.getters;
const filter = ref('all');

//computed
const isAllFilter = computed(() => filter.value === 'all');
const posts = computed<Post[]>(() => getters[GettersTypes.getPosts]);
const filteredPosts = computed(() =>
  isAllFilter.value ? posts.value : posts.value.filter(({ status }) => status === filter.value)
);

const getPost = (_id: number) => posts.value.find(({ id }) => id === _id);
const isReadPost = (id: number) => getPost(id)?.status === 'read';
const getClasses = (id: number) => ['post', { 'is-read': isReadPost(id) }];

// events
const setFilter = (value: string) => (filter.value = value);
const openPost = (id: number) =>
  router.push({
    name: Components.Post,
    params: { id },
  });
</script>

<style scoped lang="scss">
.post {
  width: 800px;
  padding: 16px;
  min-height: 60px;
  border: 1px solid blue;
  margin: 0 auto 10px auto;
  border-radius: 16px;
  cursor: pointer;

  :last-child {
    margin-bottom: 0;
  }

  .title {
    font-size: 22px;
    text-transform: capitalize;
    color: red;
    margin-bottom: 5px;
  }

  .post-text {
    font-size: 18px;
  }
}

.is-read {
  background-color: rgba(144, 108, 108, 0.2);
  border: 2px solid rgb(219, 145, 79);

  .title {
    color: rgb(80, 177, 11);
  }
}

.nav {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;

  .nav-button {
    border: none;
    border-radius: 8px;
    height: 20px;
    min-width: 100px;
    margin-right: 5px;
    cursor: pointer;

    :last-child {
      margin-right: 0;
    }
  }
}
</style>
