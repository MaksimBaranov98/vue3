import { RouteRecordRaw } from 'vue-router';
import Posts from '@/components/Posts.vue';
import Post from '@/components/Post.vue';
import NonExistentPage from '@/components/NonExistentPage.vue';

export enum Components {
  Posts = 'Posts',
  Post = 'Post',
  NonExistentPage = 'NonExistentPage',
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/posts',
    name: Components.Posts,
    component: Posts,
  },
  {
    path: '/post/id=:id',
    name: Components.Post,
    component: Post,
  },
  {
    path: '/:pathMatch(.*)',
    name: Components.NonExistentPage,
    component: NonExistentPage,
  },
  {
    path: '',
    redirect: () => {
      return { name: Components.Posts };
    },
  },
];

export default routes;
