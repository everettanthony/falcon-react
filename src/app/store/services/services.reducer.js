import SERVICES_ACTION_TYPES from './services.types';

export const SERVICES_INITIAL_STATE = {
  services: [],
  isLoading: false,
  error: null
};

export const servicesReducer = (state = SERVICES_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case SERVICES_ACTION_TYPES.FETCH_SERVICES_START:
      return { ...state, isLoading: true };
    case SERVICES_ACTION_TYPES.FETCH_SERVICES_SUCCESS:
      return { ...state, isLoading: false, services: payload };
    case SERVICES_ACTION_TYPES.FETCH_SERVICES_FAILED:
      return { ...state, isLoading: false, error: payload }; 
    default:
      return state;
  }
};