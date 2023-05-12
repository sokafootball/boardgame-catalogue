import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GameModel, GameParams } from './models/getGames';
import { objectToUrlParams } from '../../utils';
import { clientIDParam } from '../../constants';

export const boardgamesAtlasApi = createApi({
  reducerPath: 'boardgamesAtlasApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.boardgameatlas.com/api/' }),
  endpoints: (builder) => ({
    getGames: builder.query<GameModel, GameParams>({
      query: (args) => `search?${clientIDParam}&${objectToUrlParams(args)}`,
    }),
  }),
});

export const { useGetGamesQuery } = boardgamesAtlasApi;
