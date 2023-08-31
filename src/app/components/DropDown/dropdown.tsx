import { useState } from 'react';
import { Dropdown, Typography, Menu, Space } from 'antd';

import styles from "./dropdown.module.css";

export interface DropdownCustomProps {
  children: React.ReactNode;
  gameList: string[]; // список игр, который будет передаваться через пропсы
  lastItem?: string;
}

export default function DropdownCustom({
  children, // заголовок дропдауна
  gameList, // принимаем список игр через пропс
  lastItem,
}: DropdownCustomProps) {
  const [isHovered, setIsHovered] = useState(false); // состояние наведения на компонент

  const menuStyle: React.CSSProperties = {
    backgroundColor: '#3a3f44',
    borderRadius: '0.3rem',
    marginTop: '1.2rem',
  }

  const menu = (
    <Menu 
      className={styles.menu} 
      style={menuStyle}
    >
      {gameList.map((game, index) => (
        <Menu.Item key={index + 1}>
          <div className={styles.menuItem}>{game}</div>
        </Menu.Item>
      ))}
      <Menu.Divider className={styles.divider}/>
      <Menu.Item  key="100">
        <div className={styles.lastMenuItem}>{lastItem}</div>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown
      overlay={menu} // используем меню для выпадающего списка
      trigger={['click']}
      className={styles.dropDown}
    >
      <Typography.Link 
      style={{color: isHovered ? 'white' : '#aaaaaa'}} 
      onMouseEnter={() => setIsHovered(true)} // установка состояния при наведении
      onMouseLeave={() => setIsHovered(false)} // сброс состояния при уходе
      >
        <Space className={styles.dropDownText}>
          {children} 
        </Space>
        <svg xmlns="http://www.w3.org/2000/svg" fill={isHovered ? 'white' : '#aaaaaa'} viewBox="0 0 24 24" width="20" height="20"><path d="M6.41,9H17.59a1,1,0,0,1,.7,1.71l-5.58,5.58a1,1,0,0,1-1.42,0L5.71,10.71A1,1,0,0,1,6.41,9Z"/></svg>
      </Typography.Link>
    </Dropdown>
  )
}