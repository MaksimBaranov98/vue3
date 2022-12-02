import type { Post } from '@/interfaces';

export type State = {
  posts: Post[];
};

const state = (): State => {
  return {
    posts: [],
  };
};

export default state;
