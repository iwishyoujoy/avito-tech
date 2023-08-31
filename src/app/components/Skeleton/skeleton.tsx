import { Spin } from "antd";
import Image from "next/image";

import error from '@public/icons/error.svg';

import styles from "./skeleton.module.css";

export interface skeletonCustomProps{
    isError: boolean
}

export default function SkeletonCustom({isError} : skeletonCustomProps){
    return (
        <div className={styles.skeletonContainer}>
            {isError ?
            <div className={styles.skeletonError}>
                <Image src={error} alt="Error" style={{height: '30px', width: '30px'}}/>
                Oops! Seems like something gone wrong. Try to reload the page!
            </div> 
            : <Spin size="large"/>}
        </div>
    )
}