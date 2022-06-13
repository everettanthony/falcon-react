import { combineReducers } from 'redux';
import { blogsReducer } from './blogs/blogs.reducer';
import { servicesReducer } from './services/services.reducer';

export const rootReducer = combineReducers({
  blogs: blogsReducer,
  services: servicesReducer
});