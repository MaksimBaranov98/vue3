<template>
  <div class="error">
    <div>Page not found</div>

    <button class="posts-button" @click="openPosts">Open posts page</button>
  </div>
</template>

<script lang="ts">
import { Components } from '@/router/routes';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NonExistentPage',
  methods: {
    openPosts() {
      this.$router.push({
        name: Components.Posts,
      });
    },
  },
});
</script>

<style scoped lang="scss">
.error {
  width: 100%;
  height: 100px;
  font-size: 22px;
  text-align: center;
}

.posts-button {
  cursor: pointer;
  height: 30px;
  width: 150px;
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
