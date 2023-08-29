import oneIcon from '@public/icons/oneincircle.png';
import image from '@public/images/freetogame-logo.png';
import { Button } from 'antd';
import { Header } from "antd/es/layout/layout";
import Image from 'next/image';
import Link from 'next/link';
import DropdownCustom from '../DropDown/dropdown';
import styles from './header.module.css';

// TODO: инвертировать цвет кнопки при наведении, сделать хеддер стики

export default function HeaderCustom() {
  const freeGames = ['MMORPG', 'Shooter', 'MOBA', 'Anime', 'Battle Royale', 'Strategy', 'Fantasy', 'Sci-Fi', 'Card Games', 'Racing', 'Fighting', 'Social', 'Sports'];
  const freeGamesLastItem = 'Free-To-Play Games';

  const browserGames = ['Browser MMORPG', 'Browser Shooter', 'Browser Anime', 'Browser Strategy', 'Browser Fantasy', 'Browser Sci-Fi', 'Browser Racing', 'Browser Social', 'Browser Sports']
  const browserGamesLastItem = 'Browser Games';

  const headerStyle: React.CSSProperties = {
      zIndex: '999',
      textAlign: 'left',
      display: 'flex', 
      alignItems: 'top',
      justifyContent: 'space-between',
      padding: '0 15% 0 15%',
      height: 'auto',
      backgroundColor: '#272b30',
      boxShadow: '0px 1px 5px #1c1e22',
    };
    
  return (
      <Header style={headerStyle}>
        <div className={styles.leftSideHeader}>
          <Link href="/" className={styles.logo}>
            <Image src={image} alt="Free-to-play Games logo"/>
          </Link>
          <DropdownCustom gameList={freeGames} lastItem={freeGamesLastItem}>Free Games</DropdownCustom>
          <DropdownCustom gameList={browserGames} lastItem={browserGamesLastItem}>Browser Games</DropdownCustom>
          <Link href="/giveaways" className={styles.link}>
            <div className={styles.linkText}>Special Offers</div>
            <Image className={styles.icon} src={oneIcon} alt="Number one"/>
          </Link>
          <Link href="/top" className={styles.link}>Top 2023</Link>
        </div>
        <div className={styles.rightSideHeader}>
          <Button 
            href='/register'
            className={styles.joinButton} 
            size='large'
            ghost={true}
          >Join Free</Button>
        </div>
      </Header>
  )
}