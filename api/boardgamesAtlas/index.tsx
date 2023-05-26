import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GameModel, GameParams } from './models/getGames';
import { objectToUrlParams } from '../../utils';
import { MAX_RESULTS } from '../../constants';

export const boardgamesAtlasApi = createApi({
  reducerPath: 'boardgamesAtlasApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.boardgameatlas.com/api/' }),
  endpoints: (builder) => ({
    getGames: builder.query<GameModel, GameParams>({
      query: (args) =>
        `search?&client_id=${
          process.env.boardGamesAtlasClientId
        }&${objectToUrlParams(args)}&limit=${MAX_RESULTS}`,
    }),
  }),
});

export const { useLazyGetGamesQuery } = boardgamesAtlasApi;
