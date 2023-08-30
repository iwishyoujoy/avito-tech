import { Dropdown, Menu, Space, Typography } from "antd";
import Image from "next/image";

import { DownOutlined } from "@ant-design/icons";
import web from '@public/icons/web.svg';
import pc from '@public/icons/pc.svg';

import styles from "./dropdownfilter.module.css";

// TODO: мб заменить svg стрелочки вниз?
// TODO: некрасиво использовала any
export interface DropdownFilterProps {
    children: React.ReactNode;
    filterText: string; // внутренний заголовок дропдауна
    filterList: string[]; // список фильтров, который будет передаваться через пропсы
}

export interface IconSrcs {
    [key: string]: any;
}

export default function DropdownFilter({
    children,
    filterText,
    filterList,
}: DropdownFilterProps){
    const srcForIcons: IconSrcs = {
        'Windows (PC)': pc, 
        'Browser (Web)': web,
    };

    const menuStyle: React.CSSProperties = {
        backgroundColor: '#3a3f44',
        borderRadius: '0.3rem',
      }

    const menu = (
        <Menu style={menuStyle}>
            <Menu.Item>
                <div className={styles.filterText}>{filterText}</div>
            </Menu.Item>
            {filterList.map((filter, index) => (
                <Menu.Item key={index + 1}>
                    <div className={styles.filterItem}>
                        {srcForIcons[filter] ? <Image src={srcForIcons[filter]} alt={filter} className={styles.icon}/> : null}
                        {filter}
                    </div>
                </Menu.Item>
            )
            )}
        </Menu>    
    );

    return (
        <Dropdown 
            overlay={menu} 
            trigger={['click']}
        >
            <Typography.Link className={styles.dropdownNameContainer}>
                <Space className={styles.dropdownName}>
                {children} 
                </Space>
                <DownOutlined style={{fill: '#4799EB'}}/>
            </Typography.Link>
        </Dropdown>
    )
}