"use client";
import part from '@part'
import image from '@public/img/AvatarDefault.png'
export default function Header(){
/*    <flex flexWrap={'nowrap'} width={'80%'} justifyContent={'space-between'}>
        <flex bg={'red'}>
            <p link={'/'}>главная</p>
            <p link={'/profile'} marginLeft={20}>профиль</p>
        </flex>
    </flex>*/

    return(
        <part.header side={'top'}>
            <flex width={'80%'} flexWrap={'nowrap'}>
                <flex bg={'red'} pass={{paddingX:20}}>
                    <p link={'/'}>главная</p>
                    <p link={'/profile'}>профиль</p>
                </flex>
            </flex>
        </part.header>
    )
}



/*
return(
    <part.Header side={'top'}>
        <flex width={'80%'} justifyContent={'space-between'}>

            {/!*<part.image height={'100%'} src={image}></part.image>*!/}

            <navigator width={'30%'} minWidth={'150px'} >
                <link href={'/'}>главная</link>
                <link minAccess={'user'} href={'/profile'}>профиль</link>
            </navigator>

        </flex>
    </part.Header>
)*/
