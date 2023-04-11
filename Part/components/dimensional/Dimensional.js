"use client";
import styles from './Dimensional.scss'
export default function Dimensional({children}){
    return(
        <div className={styles.perspective}>
            <div className={styles.transform}>
                {children}
            </div>
        </div>
    )
}