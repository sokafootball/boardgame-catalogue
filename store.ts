import { configureStore } from '@reduxjs/toolkit';
import { boardgamesAtlasApi } from './api/boardgamesAtlas/index';

export const store = configureStore({
  reducer: {
    [boardgamesAtlasApi.reducerPath]: boardgamesAtlasApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(boardgamesAtlasApi.middleware),
});
