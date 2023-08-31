'use client'

import React from 'react';
import { FloatButton } from 'antd';
import { useSelector } from 'react-redux';

import DropdownFilter from './components/DropDownFilter/dropdownfilter';
import GameCard from './components/GameCard/gamecard';
import SkeletonCustom from './components/Skeleton/skeleton';
import { useGetGamesQuery, 
  useGetGamesByPlatformQuery, 
  useGetGamesByCategoryQuery, 
  useGetGamesSortedQuery,
  useGetGamesByPlatformAndCategoryAndSortQuery } from '@/app/redux/services/gamesApi';
import { RootState } from './redux/store';

import styles from './page.module.css';

interface Game {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
}

const GameList: React.FC = () => {
  let data: Game[] | undefined;
  let isLoading: boolean = true;
  let error: any;

  const { platform, genre, sortBy } = useSelector((state: RootState) => state.filters);
  console.log(platform, genre, sortBy);
  console.log(typeof platform);

  if (platform === 'all' && genre === 'all' && sortBy === 'relevance') {
    ({data, isLoading, error} = useGetGamesQuery({}));
  } // все параметры по умолчанию
  else if (platform !== 'all' && genre === 'all' && sortBy === 'relevance') {
    ({data, isLoading, error} = useGetGamesByPlatformQuery(platform));
  } // изменилось только значение платформы
  else if (platform === 'all' && genre !== 'all' && sortBy === 'relevance') {
    ({data, isLoading, error} = useGetGamesByCategoryQuery(genre));
  } // изменилось только значение жанра
  else if (platform === 'all' && genre === 'all' && sortBy !== 'relevance') {
    ({data, isLoading, error} = useGetGamesSortedQuery(sortBy));
  } // изменилось только значение сорта
  else if (platform !== 'all' && genre !== 'all' && sortBy === 'relevance') {
    ({data, isLoading, error} = useGetGamesByPlatformAndCategoryAndSortQuery({
      platform: platform,
      category: genre
    }));
  } // изменились значения платформы и жанра
  else if (platform !== 'all' && genre === 'all' && sortBy !== 'relevance') {
    ({data, isLoading, error} = useGetGamesByPlatformAndCategoryAndSortQuery({
      platform: platform,
      sort: sortBy
    }));
  } // изменились значения платформы и сорта
  else if (platform === 'all' && genre !== 'all' && sortBy !== 'relevance') {
    ({data, isLoading, error} = useGetGamesByPlatformAndCategoryAndSortQuery({
      category: genre,
      sort: sortBy
    }));
  } // изменились значения жанра и сорта
  else if (platform !== 'all' && genre !== 'all' && sortBy !== 'relevance') {
    ({data, isLoading, error} = useGetGamesByPlatformAndCategoryAndSortQuery({
      platform: platform,
      category: genre,
      sort: sortBy
    }));
  } // изменились все значения
  

  if (isLoading) {
    return (
        <SkeletonCustom isError={false}/>
    );
  }

  if (error || !data) {
    return (
      <SkeletonCustom isError={true}/>
  );
  }

  return (
    <div className={styles.gamesContainer}>
      {data.map((game: Game) => (
        <GameCard 
          id={game.id} 
          title={game.title} 
          thumbnail={game.thumbnail} 
          short_description={game.short_description}
          genre={game.genre}
          platform={game.platform}
          />
      ))}
    </div>
  );
}

export default function Home() {
  const platformsDict = {
    'Windows (PC)':   'pc', 
    'Browser (Web)':  'browser', 
    'All platforms':  'all'};
  const genresDict = {
    'All genres': 'all',
    'MMO':        'mmo', 
    'MMORPG':     'mmorpg', 
    'Shooter':    'shooter', 
    'Strategy':   'strategy', 
    'Moba':       'moba', 
    'Card Games': 'card', 
    'Racing':     'racing', 
    'Sports':     'sports', 
    'Social':     'social', 
    'Fighting':   'fighting'};
  const sortByDict = {
    'Relevance':    'relevance', 
    'Popularity':   'popularity', 
    'Release Date': 'release-date', 
    'Alphabetical': 'alphabetical'};

  const { platform, genre, sortBy } = useSelector((state: RootState) => state.filters);
  const selectedPlatform = [...Object.entries(platformsDict)].filter(({ 1: v }) => v === platform).map(([k]) => k);
  const selectedGenre = [...Object.entries(genresDict)].filter(({ 1: v }) => v === genre).map(([k]) => k);
  const selectedSort = [...Object.entries(sortByDict)].filter(({ 1: v }) => v === sortBy).map(([k]) => k);

  return (
    <div className='App'>
      <div className={styles.filterContainer}>
          <div className={styles.filter}>
            Platform:
            <DropdownFilter 
              filterText='Browse by platform:' 
              filterDict={platformsDict}
              filterType='platform'>{selectedPlatform}</DropdownFilter>
          </div>
          <div className={styles.filter}>
            Genre/Tag:
            <DropdownFilter 
              filterText='Browse by genre:' 
              filterDict={genresDict}
              filterType='genre'>{selectedGenre}</DropdownFilter>
          </div>
          <div className={styles.filter}>
            Sort by:
            <DropdownFilter 
              filterText='Sort by:' 
              filterDict={sortByDict}
              filterType='sortBy'>{selectedSort}</DropdownFilter>
          </div>
      </div>
      <div className='divider'/>
      <GameList />
      <FloatButton.BackTop 
        visibilityHeight={0} 
        style={{
          margin: '0 2rem 0 0',
          boxShadow: '3px 3px 10px #1c1e22'}}
        shape='circle'/>
    </div>
  )
}
