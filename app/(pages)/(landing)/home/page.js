import part from "@part"
import Slider from '../../../../widgets/slider/slider'
import hello from '@public/svg/hello.svg'
export default function page() {
    //transform: "translateY(2rem) skew(0,-5deg)"
    //disable:['mobile'],allow:['middle','mobile']

    //onScroll={{brBottom:'100px',scrollStart:'middle',id:'t1'}}

    //scrollEnd:2000
    return(
        <part.main onScroll={{id:'main',start:'middle'}}>
            <background bg={'#0081f3'} marginTop={'1px'}></background>

            <section speed={1.3} overflow={'hidden'} bg={'#eed6e7'} onScroll={{brBottom:'100px',start:'middle',id:'tt'}}>
                <grid area={'middle'} aItems={'center'} direction={'h'} templateColumns={'1fr 1fr'}>
                    <group onStart={'skew'} marginLeft={70} w={'70%'}>
                        <h1 onHover={{id:'text',bg:'red'}} color={'#0081f3'}>PROPER FOOD FOR ALL CATKIND</h1>
                        <h2 tlText={{bg:'green'}} marginTop={20} color={'#0081f3'}>Tailored to their tastes. Delivered to your door.  Try our trial box today for £9.99! </h2>
                        <part.Button2 marginTop={20}>Try Fuzzball</part.Button2>
                    </group>

                </grid>
                <img pos={'a'} w={'40%'} right={0} bottom={0} src={'https://fuzzball.club/wp-content/uploads/2022/09/Fuzzball-home-hero.jpg.webp'}/>
                <img sttt={{rotateZ:180}} pos={'a'} w={'20%'} margin={'auto'} left={0} right={0} bottom={30} src={hello.src}></img>
            </section>

            <section bg={'#0081f3'} brBottom={100}>
                <grid area={'middle'} placeItems={'center'} direction={'h'} templateColumns={'1fr 1fr'}>
                    <group overflow={'hidden'} bg={'red'} br={25} w={350} h={550}>
                        <img scale={1.3} w={'100%'} speed={0.8} src={'https://fuzzball.club/wp-content/uploads/2022/09/Fuzzball-home-about.jpg'}></img>
                    </group>

                    <group onStart={'skew'} w={'70%'}>
                        <h1 onClick={{allow:'middle',id:'text2',bg:'red'}} color={'white'}>THE FUZZBALL FORMULA</h1>
                        <h2 tlText2={{bg:'orange'}} marginTop={20} color={'white'}>Fuzzball makes food fit for a human’s plate and feline’s palate. High-quality, high-protein ingredients. No sugars, salts, grains or fillers. Ever.</h2>
                        <part.Button2 marginTop={20}>Try Fuzzball</part.Button2>
                    </group>
                </grid>
            </section>




                <horizontal onHorizontal={{end:2000,x:'-200%'}}>

                    <section bg={'white'}>
                        <flex h={'500px'} area={'middle'}>
                            <group w={'80%'} h={'100%'} bg={'#FCE593'} br={100}>123</group>
                        </flex>
                    </section>

                    <section bg={'white'}>
                        <flex h={'500px'} area={'middle'}>
                            <group w={'80%'} h={'100%'} bg={'#EED6E7'} br={100}>123</group>
                        </flex>
                    </section>

                    <section bg={'white'}>
                        <flex h={'500px'} area={'middle'}>
                            <group w={'80%'} h={'100%'} bg={'coral'} br={100}>123</group>
                        </flex>
                    </section>
                </horizontal>



            <section>
                <Slider></Slider>
            </section>

            <section>

            </section>


        </part.main>
    )
}