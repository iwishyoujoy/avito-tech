import { Skeleton } from 'antd';
import styles from './skeletonGame.module.css';

export default function SkeletonGame(){
    return (
    <div className='App'>
        <div className={styles.mainContainer}>
            <div className={styles.leftSideContainer}>
                <Skeleton.Image active={true} style={{width: "370px", height: "250px"}}/>
                <div className={styles.buttonsContainer}>
                    <Skeleton.Button active={true} size="large" shape='square' block={true} />
                    <Skeleton.Button active={true} size="large" shape='square' block={true}/>
                </div>
            </div>
            <div className={styles.rightSideContainer}>
                <Skeleton active={true} paragraph={{ rows: 10 }} />
            </div>
            </div>
        </div>
    );
}
