export const selectLoading = (state) => state.cars.isLoading;

export const selectLoadingMore = (state) => state.cars.isLoadingMore;

export const selectError = (state) => state.cars.error;

export const selectCars = (state) => state.cars.items;
export const selectPage = (state) => state.cars.page;
export const selectTotalPages = (state) => state.cars.totalPages;
export const selectTotalCars = (state) => state.cars.totalCars;
export const selectPrices = (state) => state.cars.prices;
export const selectPriceInitialized = (state) => state.cars.priceInitialized;
