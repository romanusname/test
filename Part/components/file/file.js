"use client";
import part from '@part'
import React, {useContext, useEffect,useRef,useMemo,useCallback,useLayoutEffect,useState} from "react";
const File = React.forwardRef((props, ref) => {
    const [file, setFile] = useState();
    if(!ref) ref = useRef()
    let name = 'file'
    props = part.propsSorting({props,ref, name})

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

   // let childrenPassProps = part.childrenPassProps(props)
    return(
        <input type="file" onChange={handleFileChange} />
    )
})

export default File