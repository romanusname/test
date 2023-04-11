import styles from './Navigator.module.scss'
export default function Navigator({children,area,direction,fat}){
//console.log(children.length)
    console.log(direction)
    let width
    let height
    let flexDirection

    if(direction=='horizontal'){
      //  if(!fat) fat = 80
      //  width=`${fat*children.length}px`
        flexDirection = 'row'
    }

    if(direction=='vertical'){
        if(fat) height=`${fat*children.length}px`
        flexDirection = 'column'
    }


    return(
        <nav style={{flexDirection,width,height}} className={styles.Navigator}>
            {children}
        </nav>
    )
}