import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { platform } from 'os';

export const gameApi = createApi({
  reducerPath: 'game',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  endpoints: (builder) => ({
    getGames: builder.query({ query: () => 'games' }),
    getGameById: builder.query({ query: (id) => `game?id=${id}` }),
    getGamesByPlatform: builder.query({ query: (platform) => `games?platform=${platform}` }), // pc, browser or all
    getGamesByCategory: builder.query({ query: (category) => `games?category=${category}` }), // ИЛИ ПО ТЕГУ mmorpg, shooter, strategy, moba, racing, sports, social, sandbox, open-world, survival, pvp, pve, pixel, voxel, zombie, turn-based, first-person, third-Person, top-down, tank, space, sailing, side-scroller, superhero, permadeath, card, battle-royale, mmo, mmofps, mmotps, 3d, 2d, anime, fantasy, sci-fi, fighting, action-rpg, action, military, martial-arts, flight, low-spec, tower-defense, horror, mmorts
    getGamesSorted: builder.query({ query: (sort) => `games?sort-by=${sort}` }), // release-date, popularity, alphabetical, relevance
    getGamesByPlatformAndCategoryAndSort: builder.query({
      query: ({ platform, category, sort }) =>
        `games?${platform ? `platform=${platform}` : ''}&${category ? `category=${category}` : ''}&${sort ? `sort-by=${sort}` : ''}`,
    }),
    getGamesByMultipleTags: builder.query({
      query: ({ tags, platform, sort}) =>
        `filter?tag=${tags.join('.')}${platform ? `&platform=${platform}` : ''}${sort ? `&sort-by=${sort}` : ''}`,
    })
  })
});

export const { 
  useGetGamesQuery, 
  useGetGameByIdQuery, 
  useGetGamesByPlatformQuery, 
  useGetGamesByCategoryQuery, 
  useGetGamesSortedQuery, 
  useGetGamesByPlatformAndCategoryAndSortQuery, 
  useGetGamesByMultipleTagsQuery } = gameApi;
