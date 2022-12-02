import type { MutationTree } from 'vuex';
import type { State } from './state';
import type { Post, StatusPost } from '@/interfaces';

export enum MutationTypes {
  SET_POSTS = 'SET_POSTS',
  SET_STATUS = 'SET_STATUS',
}

export type Mutations = {
  [MutationTypes.SET_POSTS](state: State, props: { posts: Post[] }): void;
  [MutationTypes.SET_STATUS](state: State, props: { id: number; status: StatusPost }): void;
};

const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_POSTS](state, { posts }) {
    state.posts = posts.map((post) => ({ ...post, status: 'unread' }));
  },
  [MutationTypes.SET_STATUS](state, { id, status }) {
    const updateStatus = () =>
      (state.posts = state.posts.map((post) => ({ ...post, status: post.id === id ? status : post.status })));

    if (state.posts.length === 0) setTimeout(updateStatus, 1000);
    else updateStatus();
  },
};

export default mutations;
