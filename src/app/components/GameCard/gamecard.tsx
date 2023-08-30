import Image from "next/image";
import Link from "next/link";

import { PlusSquareFilled } from "@ant-design/icons";
import web from '@public/icons/web.svg';
import pc from '@public/icons/pc.svg';

import styles from './gamecard.module.css';
import { useState } from "react";

export interface GameCardProps {
    id: number;
    title: string;
    thumbnail: string;
    short_description: string;
    genre: string;
    platform: string;
}

//TODO: сделать так, чтобы текст сворачивался и было в конце 3 точки 

export default function GameCard({
    id,
    title,
    thumbnail,
    short_description,
    genre,
    platform
}: GameCardProps){
    const [isHovered, setIsHovered] = useState(false); // состояние наведения на компонент

    return (
        <Link href={`/game/${id}`}>
            <div className={styles.cardContainer}>
                <div className={styles.cardImage}>
                    <Image className={styles.image} src={`https://www.freetogame.com/g/${id}/thumbnail.jpg`} alt={title} width='300' height='200'/>
                </div>
                <div className={styles.mainInfoContainer}>
                    <div className={styles.titleContainer}>
                        <span className={styles.title}>{title}</span>
                    </div>
                    <div className={styles.descriptionContainer}>
                        <span className={styles.description}>{short_description}</span>
                    </div>
                    <div className={styles.tags}>
                        <PlusSquareFilled 
                            onMouseEnter={() => setIsHovered(true)} // установка состояния при наведении
                            onMouseLeave={() => setIsHovered(false)} // сброс состояния при уходе                   
                            style={{color: isHovered ? 'white' : '#aaaaaa'}}/>
                        <div className={styles.tagsRightSide}>
                            <div className={styles.genreTag}>{genre}</div>
                            <Image className={styles.platform} src={platform === "PC (Windows)"  || platform === "Windows" ? pc : web} alt={platform}/>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}


// [{"id":540,"title":"Overwatch 2","thumbnail":"https:\/\/www.freetogame.com\/g\/540\/thumbnail.jpg","short_description":"A hero-focused first-person team shooter from Blizzard Entertainment.","game_url":"https:\/\/www.freetogame.com\/open\/overwatch-2","genre":"Shooter","platform":"PC (Windows)","publisher":"Activision Blizzard","developer":"Blizzard Entertainment","release_date":"2022-10-04","freetogame_profile_url":"https:\/\/www.freetogame.com\/overwatch-2"},