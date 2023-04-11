import part from '@part'
import image from '@public/img/HappyKid.png'
//import WordMaster from "@modules/WordMaster/WordMaster";
import Star from '@public/svg/star.svg'

export default function home(){

    return(
        /*<WordMaster>*/
        <part.Main>
            <section comment={'1'} bg={'@blue'}>
                <background>
                    <svg src={'star'} left={'20%'} top={200} size={100} mobile={{top:400,left:'40'}} ></svg>
                </background>
                <flex mobile={{flexDirection:'column',area:'bottom'}} area={'middle'} shadow={{size:'20px', v:'30px'}}>
                    <group comment={'левая сторона'} onHoverYoyo={[{id:'s2',x:50},{y:50,pos:0.5}]} bg={'red'}>
                        <h1 id={'1'}>test test</h1>
                        <p maxWidth={'373px'}>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
                        <part.Button1/>
                        <flex marginTop={'20px'} tl={{id:'s2',background:'orange'}} justifyContent={'space-between'}>
                            <div> 123 </div>
                            <div> 456 </div>
                            <div> 123 </div>
                        </flex>
                    </group>
                    <group comment={'правая сторона'} size={'300px'}>
                        <image position={'absolute'} height={'100%'} src={image}></image>
                    </group>
                </flex>
            </section>
            <section onHover={{id:'sss',background:'red'}} pin={true} comment={'2'} bg={'#FBCEB1'}>
                <compound fill={'@red'} marginTop={'-1px'} side={'top'} d={'M 0 0, C 50 50, 50 50, 100 0'} height={'100px'}/>
                <background></background>
                <group tl={{id:'sss',y:-50}} comment={'Тайтл'} area={'top'} placeItems={'center'} height={'100px'} marginTop={'100px'}>
                    <h2>test</h2>
                    <p maxWidth={'450px'}>lorem lorem lorem lorem lorem lorem lorem lorem </p>
                </group>
                <flex comment={'Карты'} mobile={{flexDirection:'column'}} area={'middle'}>
                    <part.Card text2={'222'}></part.Card>
                    <part.Card bg={'blue'} zoom={1.2}></part.Card>
                    <part.Card>111</part.Card>
                </flex>
            </section>
            <section comment={'3'} pin={true} bg={'rgb(147,155,14)'}>
                <grid paddingX={'5%'} height={'500px'} area={'middle'} gridArea={`'g1 g2 g3' 'g1 g4 g4'`}>
                    <group>1</group>
                    <group>2</group>
                    <group>3</group>
                    <group>4</group>
                </grid>
            </section>
            <section comment={'4'} bg={'rgb(190,201,33)'}>
                <part.Three3></part.Three3>
            </section>
        </part.Main>
        /*</WordMaster>*/
    )
}