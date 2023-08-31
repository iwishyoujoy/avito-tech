import { Dropdown, Menu, Space, Typography } from "antd";
import Image from "next/image";
import { useDispatch } from "react-redux";

import { setGenre, setPlatform, setSortBy } from "@/app/redux/store";
import { DownOutlined } from "@ant-design/icons";
import pc from '@public/icons/pc.svg';
import web from '@public/icons/web.svg';

import styles from "./dropdownfilter.module.css";

export interface DropdownFilterProps {
    children: React.ReactNode;
    filterText: string; // внутренний заголовок дропдауна
    filterDict:  { [key: string]: string }; // список фильтров, который будет передаваться через пропсы
    filterType: string; // тип фильтра, который будет передаваться через пропсы
}

export interface IconSrcs {
    [key: string]: any;
}

export default function DropdownFilter({
    children,
    filterText,
    filterDict,
    filterType,
}: DropdownFilterProps){
    const dispatch = useDispatch();
    // const { platform, genre, sortBy } = useSelector((state: RootState) => state.filters);

    const handleSelect = (filter: string) => {
        switch (filterType) {
            case 'platform':
                dispatch(setPlatform(filterDict[filter]));
                break;
            case 'genre':
                dispatch(setGenre(filterDict[filter]));
                break;
            case 'sortBy':
                dispatch(setSortBy(filterDict[filter]));
                break;
            default:
                break;
        }
    };

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
            {Object.keys(filterDict).map((filter, index) => (
                <Menu.Item key={index + 1}>
                    <div 
                        className={styles.filterItem}
                        onClick={() => handleSelect(filter)}>
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