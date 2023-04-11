"use client";
import styles from './table.module.scss'
import part from '@part'
import Test from '@components/Test'
import React, {useContext, useEffect,useRef,useMemo,useCallback,useLayoutEffect,useState} from "react";
import {v4 as uuidv4} from "uuid";
const table = React.forwardRef((props, ref) => {
    const [rows,setRows]= useState([])
    const [sortType,setSortType]=useState('email2')
    const [data,setData]=useState(false)
    const {socket} = part.socket()
    if(!ref) ref = useRef()
    let name = 'table'
    props = part.propsSorting({props,ref, name})

  //  console.log(props)


    useEffect(()=>{
        if(data) {
            sort(data)
            let arrayRows = deepData(props, data)
            setRows(arrayRows)
        }
    },[sortType])


    useEffect(()=>{

        if(socket) {
            socket.on('track/users',(users)=>{
                setData(users)
                console.log(users)
               // sortEmail(users)
                sort(users)
                let arrayRows = deepData(props,users)
                setRows(arrayRows)
            })
            socket.emit(props.get, (users) => {
                setData(users)
                console.log(users)
               // sortEmail(users)
                sort(users)
                let arrayRows = deepData(props,users)
                setRows(arrayRows)

            })
        }
    },[socket])



    function deepData(props,users) {
        let arrayRows = []
        for (let i = 0; i < users.length; i++) {
            const children = {...props.children}
            const row = deep(children)
          //  const row = <Test email={users[i].email} role={users[i].role}></Test>

            function deep(children) {
                return React.Children.map(children, (child) => {
                    if (React.isValidElement(child)) {
                        if (child.props.children) {
                            child = React.cloneElement(child, {children: deep(child.props.children)})
                        }
                        if (child.props.valueKey) {
                            return React.cloneElement(child, {children: users[i][child.props.valueKey]})
                        }
                        return React.cloneElement(child);
                    }
                    return child;
                });
            }

            arrayRows.push(row)
        }
        return arrayRows
    }


    function sort(data){
        if(sortType=='email') sortEmail(data)
        if(sortType=='email2') sortEmail2(data)
    }


    function sortEmail(users){
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
    }


    function sortEmail2(users){
        users.sort((a, b) => {
            //  let fa = a.email.toLowerCase(),
            //    fb = b.email.toLowerCase();

            if(!a.email) {
                return 1;
            }
            if(!b.email) {
                return -1;
            }

            if (a.email > b.email) {
                return -1;
            }
            if (a.email < b.email) {
                return 1;
            }
            return 0;
        });
    }


  //  let childrenPassProps = part.childrenPassProps(props)
    return(
        <table className={`${styles.table}`} {...props.attributes}>
            <thead>
                {/*{props.thead}*/}
                <part.tr disableMemo={true} onClick={()=>setSortType('email')} height={100}>
                    <part.th>пользователь</part.th>
                    <part.th>роль</part.th>
                </part.tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
        </table>
    )
})

export default table





/*let roles={
    admin:0,
    user:1,
    guest:2,
}

function byFieldRole() {
    return (a, b) =>
        roles[a['role']] > roles[b['role']] ? 1 : -1;
}
//  users.sort(byFieldRole())*/
