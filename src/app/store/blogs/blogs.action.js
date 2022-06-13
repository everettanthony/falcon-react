import BLOGS_ACTION_TYPES from './blogs.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const fetchBlogsStart = () =>
  createAction(BLOGS_ACTION_TYPES.FETCH_BLOGS_START);

export const fetchBlogsSuccess = (blogsArray) =>
  createAction(
    BLOGS_ACTION_TYPES.FETCH_BLOGS_SUCCESS,
    blogsArray
  );

export const fetchBlogsFailure = (error) =>
  createAction(BLOGS_ACTION_TYPES.FETCH_BLOGS_FAILED, error);