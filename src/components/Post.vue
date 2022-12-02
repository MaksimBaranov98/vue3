<template>
  <div class="post">
    <div class="post">Post {{ postId }} read</div>

    <!-- <div class="post">Post {{ post }}</div> -->

    <button class="back-button" @click="back">Back</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
import { MutationTypes } from '@/store/posts/mutations';
import type { Post } from '@/interfaces';

const router = useRouter();
const route = useRoute();
const store = useStore();
const postId = computed(() => +(route.params.id as string));
const post = computed<Post | undefined>(() => (store.state.posts as Post[]).find(({ id }) => id === postId.value));

const back = () => router.back();

onMounted(() => store.commit(MutationTypes.SET_STATUS, { id: postId.value, status: 'read' }));
</script>

<style scoped lang="scss">
.post {
  width: 100%;
  text-align: center;
  font-size: 22px;
}

.back-button {
  cursor: pointer;
  height: 30px;
  width: 100px;
  margin-top: 15px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.8);
  background-color: rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(0, 0, 0, 0.4);
  }
}
</style>
