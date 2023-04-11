"use client";
import styles from './Slider.module.scss'
export function Window ({children}){
    return(
        <div className={styles.window}>
            <div className={styles.windows}>
            {children}
            </div>
        </div>
    )
}