
import part from '@part'

export default function home(){
    return(
        <part.Main>
            <section>
                <background noise height={'100vh'} placeItems={'center'} bg={'linear-gradient(156deg, rgba(108,34,108,1) 0%, rgba(62,4,52,1) 100%)'}>
                    <light size={550} marginTop={50} opacity={0.5} color={'blue'}/>
                </background>
                <flex area={'middle'}>
                    <grid>
                    <h1 color={'white'}>шаблон сайта</h1>
                    <p color={'white'}>новейший шаблон part сайта</p>
                    </grid>
                </flex>
            </section>
            <section height={'150vh'} bg={'linear-gradient(0deg, rgba(108,34,34,1) 0%, rgba(179,0,255,1) 100%)'}>
                <flex onStart={{opacity:0,y:200}} area={'middle'}>
                    <part.Button1></part.Button1>
                </flex>
            </section>

            <section bg={'green'}>
                <flex justify={'sb'} area={'middle'}>
                    <group onTilt size={200} bg={'red'}/>
                    <group onTilt size={200} bg={'red'}/>
                </flex>
            </section>
        </part.Main>
    )
}