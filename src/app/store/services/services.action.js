import SERVICES_ACTION_TYPES from './services.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const fetchServicesStart = () =>
  createAction(SERVICES_ACTION_TYPES.FETCH_SERVICES_START);

export const fetchServicesSuccess = (servicesArray) =>
  createAction(
    SERVICES_ACTION_TYPES.FETCH_SERVICES_SUCCESS,
    servicesArray
  );

export const fetchServicesFailure = (error) =>
  createAction(SERVICES_ACTION_TYPES.FETCH_SERVICES_FAILED, error);

