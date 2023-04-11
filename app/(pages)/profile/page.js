import Ssr from '../../../Part/ssr/Ssr'
//import image from '@public/img/HappyKid.png'
//import ibg from '@public/img/bg.jpg'
import part from '@part'
//import Test2 from "@components/Test2";

/*export const metadata = {
    title: 'testMetadata',
};*/

export default function Page(){

    console.log('Page profile')
        //<Ssr get={['User']}>
        //mobile={{direction:'column'}
    //fontSize={'7vw'}
    return(
        <Ssr get={['User']}>
        <part.main>
            <section>
                <grid areas={3}>
                    <flex pass={{margin:10}} area={'bottom'}>
                        <h2 value={['User','email']}>почта</h2>
                        <h2 value={['User','role']}>роль</h2>
                        <h2 onLink={'/control'}>control</h2>
                        <h2 setModal={['createRoom',true]}>create room</h2>
                    </flex>
                </grid>
            </section>
        </part.main>
        </Ssr>
    )
}



/*
<part.Main>
    <section>
        <grid areas={3}>
            <flex area={'bottom'}>
                <h2 get={'User'} value={'email'}>почта</h2>
                <h2 get={'User'} value={'role'}>роль</h2>
            </flex>
        </grid>
    </section>
</part.Main>*/
