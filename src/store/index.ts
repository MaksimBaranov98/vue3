import { createStore } from 'vuex';
import posts from './posts';

const modules = {
  posts,
};

export default createStore({
  modules,
});
