import styles from "./skeleton.module.css";

export default function SkeletonCustom(){
    return (
        <div className={styles.cardContainer}>
                <div className={styles.cardImage}>
                </div>
                <div className={styles.mainInfoContainer}>
                    <div className={styles.titleContainer}>
                    </div>
                    <div className={styles.descriptionContainer}>
                    </div>
                    <div className={styles.tags}>
                        <div className={styles.tagsRightSide}>
                        </div>
                    </div>
                </div>
            </div>
    )
}