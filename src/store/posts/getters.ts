import type { GetterTree } from 'vuex';
import type { State } from './state';
import { Post } from '@/interfaces';

export enum GettersTypes {
  getPosts = 'getPosts',
}

export type Getters = {
  [GettersTypes.getPosts](state: State, getters?: GetterTree<State, State> & Getters): Post[];
};

const getters: GetterTree<State, State> & Getters = {
  [GettersTypes.getPosts]({ posts }): Post[] {
    return posts;
  },
};

export default getters;
