import BLOGS_ACTION_TYPES from './blogs.types';

export const BLOGS_INITIAL_STATE = {
  blogs: [],
  isLoading: false,
  error: null
};

export const blogsReducer = (state = BLOGS_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case BLOGS_ACTION_TYPES.FETCH_BLOGS_START:
      return { ...state, isLoading: true };
    case BLOGS_ACTION_TYPES.FETCH_BLOGS_SUCCESS:
      return { ...state, isLoading: false, blogs: payload };
    case BLOGS_ACTION_TYPES.FETCH_BLOGS_FAILED:
      return { ...state, isLoading: false, error: payload }; 
    default:
      return state;
  }
};