export const selectLoading = (state) => state.cars.isLoading;

export const selectError = (state) => state.cars.error;

export const selectCars = (state) => state.cars.items;
export const selectPage = (state) => state.cars.page;
export const selectTotalPages = (state) => state.cars.totalPages;
export const selectTotalCars = (state) => state.cars.totalCars;
