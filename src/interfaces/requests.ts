import { StatusPost } from './common';

interface Post {
  id: number;
  userId: number;
  body: string;
  title: string;
  status: StatusPost;
}

export { Post };
