import type { State } from './state';
import type { ActionTree } from 'vuex';
import axios from 'axios';
import type { Post } from '@/interfaces';
import { MutationTypes } from './mutations';

export enum ActionTypes {
  LOAD_POSTS = 'LOAD_POSTS',
}

export type Actions = {
  [ActionTypes.LOAD_POSTS](store: any): Promise<void>;
};

const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.LOAD_POSTS]({ commit }) {
    const { data: posts } = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');

    commit(MutationTypes.SET_POSTS, { posts });
  },
};

export default actions;
