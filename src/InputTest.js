import { use, useEffect, useRef, useState } from "react";
import React from "react";

const InputTest = () => {
    const [value, setValue] = useState('');
    const searchRef = useRef(null);
    console.log(searchRef.current);
   
    // useEffect(()=> {
    //     console.log(searchRef);
    // },[searchRef])
    return(
    <>
    <form onSubmit={(e)=>
    
    {e.preventDefault()
        console.log(e)}
        // setValue()
    }>
        <input type="text" />
        <button type="submit" onClick={() => setValue(searchRef.current.value)}>click</button>
        <div>{value}</div>
    </form>
    </>

    )

};

export default InputTest;