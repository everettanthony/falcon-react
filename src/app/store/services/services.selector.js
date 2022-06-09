import { createSelector } from 'reselect';

const selectServiceReducer = (state) => state.services;

export const selectServices = createSelector(
  [selectServiceReducer],
  (servicesSlice) => servicesSlice.services
);

export const selectServicesMap = createSelector(
  [selectServices],
  (services) => services.map((service) => {
    return service;
  })
);

export const selectIsLoading = createSelector(
  [selectServiceReducer],
  (servicesSlice) => servicesSlice.isLoading
);