'use client'

import Image from 'next/image';
import styles from './page.module.css';
import { useGetGameByIdQuery } from '@/app/redux/services/gamesApi';
import { ExportOutlined } from '@ant-design/icons';
import { useState } from 'react';
import web from '@public/icons/web.svg';
import pc from '@public/icons/pc.svg';
import SkeletonGame from '@/app/components/SkeletonGame/skeletonGame';
import SkeletonCustom from '@/app/components/Skeleton/skeleton';

interface GameProps{
    params: {
        id: number;
    }
}

export default function Page({ params: { id } } : GameProps){
    const [isHovered, setIsHovered] = useState(false); // состояние наведения на компонент
    const gameInfo: Record<string, string> = {
        title: 'Title',
        developer: 'Developer',
        publisher: 'Publisher',
        release_date: 'Release date',
        genre: 'Genre',
        platform: 'Platform'
    }

    const { data, isLoading, error } = useGetGameByIdQuery(id);
    
    if (isLoading) {
        return (<SkeletonGame />);
    }

    if (error || !data) {
        return (<SkeletonCustom isError={true}/>);
    }
    
    return (
    <div className='App'>
        <div className={styles.mainGameContainer}>
            <div className={styles.leftSideContainer}>
                <Image className={styles.image} src={`https://www.freetogame.com/g/${id}/thumbnail.jpg`} alt={data.title} width='500' height='500'/>
                <div className={styles.buttonsContainer}>
                    <svg 
                        className={styles.plusButton}
                        onMouseEnter={() => setIsHovered(true)} // установка состояния при наведении
                        onMouseLeave={() => setIsHovered(false)} // сброс состояния при уходе                  
                        xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 512 512" width="512" height="512" fill={isHovered ? "white" : "#aaaaaa"}>
                        <path d="M480,224H288V32c0-17.673-14.327-32-32-32s-32,14.327-32,32v192H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h192v192   c0,17.673,14.327,32,32,32s32-14.327,32-32V288h192c17.673,0,32-14.327,32-32S497.673,224,480,224z"/>
                    </svg>
                    <button className={styles.playButton}>
                        PLAY NOW
                        <ExportOutlined style={{color: 'white'}} />
                    </button>
                </div>
                <div className={styles.platformContainer}>
                    <Image className={styles.platform} src={data.platform === "PC (Windows)" || data.platform === "Windows" ? pc : web} alt={data.platform}/>
                    {data.platform}
                </div>
            </div>
            <div className={styles.rightSideContainer}>
                <div className={styles.genreContainer}>
                    <div className={styles.genreTag}>{data.genre}</div>
                </div>
                <div className={styles.titleContainer}>{data.title}</div>
                <div className={styles.description}>{data.description}</div>
                <div className='divider'/>
                <div className={styles.additionInformation}>
                    <div className={styles.infoHeader}>Additional information</div>
                    <div className={styles.infoNote}>
                        <svg className={styles.infoIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512" fill='#aaaaaa'><path d="M24,12A12,12,0,1,1,12,0,12.013,12.013,0,0,1,24,12ZM14,12a2,2,0,0,0-2-2H10v2h2v7h2ZM12,5a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,12,5Z"/></svg>
                        Please note this free-to-play game may or may not offer optional in-game purchases.</div>
                    <div className={styles.infoContainer}>
                        {Object.keys(gameInfo).map((key) => {
                            return (
                                <div className={styles.container} key={key}>
                                    <div className={styles.header}>{gameInfo[key]}</div>
                                    <div className={styles.point}>{data[key]}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
