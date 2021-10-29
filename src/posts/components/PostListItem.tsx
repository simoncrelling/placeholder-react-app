import * as React from 'react';

export interface IPostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const PostListItem = (props: IPostProps) => {
  const { id, title, body } = props;
  return (
    <div>
      <span>{id}</span>
      <span>{title}</span>
      <span>{body}</span>
    </div>
  );
};
