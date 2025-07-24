import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import carsReducer from "./cars/slice";
import filtersReducer from "./filters/slice";
import favoriteReducer from "./favorites/slice";
import brandsReducer from "./brands/slice";

const favPersistedConfig = persistReducer(
  {
    key: "favorites",
    storage,
    whitelist: ["carsId"],
  },
  favoriteReducer
);

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: filtersReducer,
    favorites: favPersistedConfig,
    brands: brandsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
