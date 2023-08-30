'use client'

import { Divider } from 'antd';
import React from 'react';
import DropdownFilter from './components/DropDownFilter/dropdownfilter';
import styles from './page.module.css';

// TODO: переделать список жанров 

export default function Home() {
  const platforms = ['Windows (PC)', 'Browser (Web)', 'All platforms'];

  const genres = ['MMO', 'MMORPG', 'Shooter', 'Strategy', 'Moba', 'Card Games', 'Racing', 'Sports', 'Social', 'Fighting'];
  const sortBy = ['Relevance', 'Popularity', 'Release Date', 'Alphabetical'];

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

      </div>
    </div>
  )
}
