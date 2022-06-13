import { createSelector } from 'reselect';

const selectBlogReducer = (state) => state.blogs;

export const selectBlogs = createSelector(
  [selectBlogReducer],
  (blogsSlice) => blogsSlice.blogs
);

export const selectBlogsMap = createSelector(
  [selectBlogs],
  (blogs) => blogs.map((blog) => {
    return blog;
  })
);

export const selectIsLoading = createSelector(
  [selectBlogReducer],
  (blogsSlice) => blogsSlice.isLoading
);