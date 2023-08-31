import { useCallback, useEffect, useState } from 'react';
import { Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

import menu from '@public/icons/menu.svg';
import oneIcon from '@public/icons/oneincircle.png';
import image from '@public/images/freetogame-logo.png';
import DropdownCustom from '@/app/components/DropDown/dropdown';

import styles from './header.module.css';

const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: any) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

export default function HeaderCustom() {
  const freeGames = ['MMORPG', 'Shooter', 'MOBA', 'Anime', 'Battle Royale', 'Strategy', 'Fantasy', 'Sci-Fi', 'Card Games', 'Racing', 'Fighting', 'Social', 'Sports'];
  const freeGamesLastItem = 'Free-To-Play Games';

  const browserGames = ['Browser MMORPG', 'Browser Shooter', 'Browser Anime', 'Browser Strategy', 'Browser Fantasy', 'Browser Sci-Fi', 'Browser Racing', 'Browser Social', 'Browser Sports']
  const browserGamesLastItem = 'Browser Games';

  const isBreakpoint = useMediaQuery(768);
  const [isOpen, setIsOpen] = useState(false);

  const logoDesktop = () => {
    return (
      <Link href="/" className={styles.logo}>
        <Image src={image} alt="Free-to-play Games logo"/>
    </Link>);
  }
  
  const logoMobile = () => {
    return (
      <div className={styles.mobileContainer}>
        <Link href="/" className={styles.logo}>
          <Image src={image} alt="Free-to-play Games logo"/>
        </Link>
        <Image onClick={() => setIsOpen(!isOpen)} src={menu} alt="Menu button"/>
      </div>
      );
  }
    
  return (
      <div className={styles.mainContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.leftSideHeader}>
            {isBreakpoint ? logoMobile() : logoDesktop()}
            <div className={'menu ' + (isOpen ? 'show' : '')}>
              <DropdownCustom gameList={freeGames} lastItem={freeGamesLastItem}>Free Games</DropdownCustom>
              <DropdownCustom gameList={browserGames} lastItem={browserGamesLastItem}>Browser Games</DropdownCustom>
              <Link href="/" className={styles.link}>
                <div className={styles.linkText}>Special Offers</div>
                <Image className={styles.icon} src={oneIcon} alt="Number one"/>
              </Link>
              <Link href="/" className={styles.link}>Top 2023</Link>
            </div>
          </div>
          <div className={'rightSideHeader ' + (isOpen ? ' show' : '')}>
            <Button 
              href='/'
              className={styles.joinButton} 
              size='large'
              ghost={true}
            >Join Free</Button>
          </div>
        </div>
      </div>
  )
}