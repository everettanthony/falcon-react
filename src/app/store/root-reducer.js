import { combineReducers } from 'redux';
import { servicesReducer } from './services/services.reducer';

export const rootReducer = combineReducers({
  services: servicesReducer
});