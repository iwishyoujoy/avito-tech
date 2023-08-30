'use client'

import { Divider } from 'antd';
import React from 'react';
import DropdownFilter from './components/DropDownFilter/dropdownfilter';
import styles from './page.module.css';
import { useGetGamesQuery } from '@/app/redux/services/gamesApi';

// TODO: переделать список жанров 

interface Game {
  id: number;
  title: string;
}

export default function Home() {
  const platforms = ['Windows (PC)', 'Browser (Web)', 'All platforms'];

  const genres = ['MMO', 'MMORPG', 'Shooter', 'Strategy', 'Moba', 'Card Games', 'Racing', 'Sports', 'Social', 'Fighting'];
  const sortBy = ['Relevance', 'Popularity', 'Release Date', 'Alphabetical'];

  const GameList: React.FC = () => {
    const apiUrl = 'http://localhost:3000/api';
    const { data, isLoading, error } = useGetGamesQuery(apiUrl); // Используйте новый хук
  
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error || !data) {
      return <div>Error loading games</div>;
    }
  
    return (
      <div>
        <h2>Games List</h2>
        <ul>
          {data.map((game: Game) => (
            <li key={game.id}>{game.title}</li>
          ))}
        </ul>
      </div>
    );
  }

  const dividerStyle: React.CSSProperties = {
    backgroundColor: '#3b3c3c', 
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
      <Divider style={dividerStyle}/>
      <div className={styles.gamesContainer}>
        <GameList />
      </div>
    </div>
  )
}
