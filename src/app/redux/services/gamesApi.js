import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const gameApi = createApi({
  reducerPath: 'game',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.freetogame.com/api/' }),
  endpoints: (builder) => ({
    getGames: builder.query({ query: () => 'games' }),
    getGamesByPlatform: builder.query({ query: (platform) => `games?platform=${platform}` }), // pc, browser or all
    getGamesByCategory: builder.query({ query: (category) => `games?category=${category}` }), // mmorpg, shooter, strategy, moba, racing, sports, social, sandbox, open-world, survival, pvp, pve, pixel, voxel, zombie, turn-based, first-person, third-Person, top-down, tank, space, sailing, side-scroller, superhero, permadeath, card, battle-royale, mmo, mmofps, mmotps, 3d, 2d, anime, fantasy, sci-fi, fighting, action-rpg, action, military, martial-arts, flight, low-spec, tower-defense, horror, mmorts
    getGamesSorted: builder.query({ query: (sort) => `games?sort-by=${sort}` }), // release-date, popularity, alphabetical, relevance
    
}),
});

export const { useGetGamesQuery, useGetGamesByPlatformQuery } = gameApi;
