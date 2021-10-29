import { IPost } from './IPost';

export const PostListItem = (props: IPost) => {
  const { id, title, body } = props;
  return (
    <div>
      <span>{id}</span>
      <span>{title}</span>
      <span>{body}</span>
    </div>
  );
};
