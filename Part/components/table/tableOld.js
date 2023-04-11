"use client";
import styles from './table.module.scss'
import part from '@part'
import React, {useContext, useEffect,useRef,useMemo,useCallback,useLayoutEffect,useState} from "react";
import {v4 as uuidv4} from "uuid";
const table = React.forwardRef((props, ref) => {
    const [rows,setRows]= useState([])
    const [deepPath,setDeepPath]= useState([])
    const {socket} = part.socket()
    if(!ref) ref = useRef()
    let name = 'table'
    props = part.propsSorting({props,ref, name})

  //  console.log(props)

    useEffect(()=>{

     //   children['props']['children'][0]['props'] = {children:'test'}

        const path = []
        const children = {...props.children}
        deepValue(children)
        console.log(path)
        function deepValue(children) {
            React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    if (child.props.children) {
                        child = React.cloneElement(child, {children: deepValue(child.props.children)})
                        path.push('props')
                      //  path.push('children')
                    }
                    if (child.props.valueKey) {
                      //  return React.cloneElement(child, {children: users[i][child.props.valueKey]})
                        path.push('props')
                        path.push('children')
                    }
                    return React.cloneElement(child);
                }
                return child;
            })
        }




        if(socket) {
            socket.on('track/users',(users)=>{

               // console.log('new user',users)
            })
            socket.emit(props.get, (users) => {

                let roles={
                    admin:0,
                    user:1,
                    guest:2,
                }

                function byFieldRole() {
                    return (a, b) =>
                        roles[a['role']] > roles[b['role']] ? 1 : -1;
                }
              //  users.sort(byFieldRole())


            users.sort((a, b) => {
                  //  let fa = a.email.toLowerCase(),
                    //    fb = b.email.toLowerCase();

                    if(!a.email) {
                        return 1;
                    }
                    if(!b.email) {
                        return -1;
                    }

                    if (a.email < b.email) {
                        return -1;
                    }
                    if (a.email > b.email) {
                        return 1;
                    }
                    return 0;
                });


                let arrayRows = []

                for (let i = 0; i < users.length; i++) {
                    const children = {...props.children}

                  //  let path = [['props'],['children'],['props']]

                    children.props.children.props.children = users[i].email


                    console.log(path)

                    /*let context = children;
                    for (const name of path) {
                        context = context[name];
                    }*/

                    /*const expandObject = (component, path) =>
                        path.reduce((acc, path) => acc[path], component);

                    expandObject(children, path).children = users[i].email*/

                  //  let email = users[i].email
                  //  console.log(email)

                   // context.children = email
                  //  if(i==0)context.children = 'test'
                  //  if(i==1)context.children = 'test1'
                   // if(i==2)context.children = 'test2'
                  //  if(i==3)context.children = 'test3'
                   // if(i==4)context.children = 'test4'


                    let row = children
                    arrayRows.push(row)
                }

                setRows(arrayRows)

            })
        }
    },[socket])

  //  let childrenPassProps = part.childrenPassProps(props)
    return(
        <table className={`${styles.table}`} {...props.attributes}>
            <thead>
                <tr height={100}>
                    <th>пользователь</th>
                    <th>роль</th>
                </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
        </table>
    )
})

export default table
