'use client'

import React from 'react';
import { Divider, Skeleton } from 'antd';

import DropdownFilter from './components/DropDownFilter/dropdownfilter';
import { useGetGamesQuery } from '@/app/redux/services/gamesApi';

import styles from './page.module.css';
import GameCard from './components/GameCard/gamecard';
import SkeletonCustom from './components/Skeleton/skeleton';


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

export default function Home() {
  const platforms = ['Windows (PC)', 'Browser (Web)', 'All platforms'];

  const genres = ['MMO', 'MMORPG', 'Shooter', 'Strategy', 'Moba', 'Card Games', 'Racing', 'Sports', 'Social', 'Fighting'];
  const sortBy = ['Relevance', 'Popularity', 'Release Date', 'Alphabetical'];

  const GameList: React.FC = () => {
    const { data, isLoading, error } = useGetGamesQuery({});
  
    if (isLoading) {
      return (
          <SkeletonCustom />
        //TODO: пофиксить скелетон
      );
    }

    if (error || !data) {
      return <div>Error loading games</div>;
      // TODO: сделать заглушку для ошибки
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

  return (
    <div className='App'>
      <div className={styles.filterContainer}>
          <div className={styles.filter}>
            Platform:
            <DropdownFilter filterText='Browse by platform:' filterList={platforms}>All platforms</DropdownFilter>
          </div>
          <div className={styles.filter}>
            Genre/Tag:
            <DropdownFilter filterText='Browse by genre:' filterList={genres}>All genres</DropdownFilter>
          </div>
          <div className={styles.filter}>
            Sort by:
            <DropdownFilter filterText='Sort by:' filterList={sortBy}>Relevance</DropdownFilter>
          </div>
      </div>
      <div className='divider'/>
      <GameList />
    </div>
  )
}
