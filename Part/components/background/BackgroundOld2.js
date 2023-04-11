import styles from './Background.module.scss'
export default function Background({fat,long,marginTop,marginLeft}){

    let [width,height] = [fat,long]

    if(!width && !height){
        width='100%'
        height='100%'
    }

    if(!width) width = height
    if(!height) height = width

    //возможность уменшьшать всю группу
    // js работает при старте не в useEffect. (хотя бы на стартовой странице)

    return(
        <div style={{ width, height,marginTop,marginLeft}} className={styles.Background}>

        </div>
    )
}