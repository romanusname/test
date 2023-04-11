import { cookies } from 'next/headers';
import React from 'react'
import db from '@db'
import getUser from "./getUser";
import getUsers from "./getUsers";
export default async function ssr(props) {
    console.log('ssr')
    let ssr = {}
    ssr.Text = {}
    //dbConnect()
    db.connect()

    const cookieStore = cookies();
    const token = cookieStore.get('token');
  //  console.log('TOKEN',token)

    if(props.get.includes('User')) {
        await getUser(ssr,token)
    }

    if(props.get.includes('Users')) {
        await getUsers(ssr)
    }

    const childrenWithProps = React.Children.map(props.children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { ...child.props,ssr });
        }
        return child;
    });


    return childrenWithProps
}