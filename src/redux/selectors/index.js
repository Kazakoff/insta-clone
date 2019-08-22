import { createSelector } from 'reselect';

const getPosts = state => state.posts;

export const getPostMemoized = createSelector(
  getPosts,
  state => state
);
