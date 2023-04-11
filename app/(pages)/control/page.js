import part from '@part'
import React from "react";
export default function page() {
    //<part.td valueKey={'role'}/>

    const thead=
    <part.tr disableMemo={true} height={100}>
        <part.th>пользователь</part.th>
        <part.th>роль</part.th>
    </part.tr>


    return(
        <part.main>
            <section>

                <table justifySelf={'center'} area={'middle'} width={'80%'} get={'/get/users'}>
                    <part.tr bg={'green'}>
                        <part.td valueKey={'email'} color={'coral'}/>
                        <part.td valueKey={'role'}/>
                    </part.tr>
                </table>

            </section>
        </part.main>
    )
}


/*<tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
</tr>
<tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
</tr>*/



/*return(
    <part.Main>
        <section>
            <table justifySelf={'center'} area={'middle'} width={'80%'}>
                <thead>
                <tr height={100}>
                    <th>пользователь</th>
                    <th>роль</th>
                    <th>Country</th>
                </tr>
                </thead>
                <tbody>
                <tr height={200}>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr height={200}>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
                </tbody>
            </table>
        </section>
    </part.Main>
)*/






/*
import part from '@part'
import Ssr from '../../../Part/ssr/Ssr'
import List from '../../../control/users/list/List'
export default function page() {
    return(
        <Ssr get={['Users']}>
            <part.Main>
                <section>
                    <List></List>
                </section>
                <section>
                </section>
            </part.Main>
        </Ssr>
    )
}*/
