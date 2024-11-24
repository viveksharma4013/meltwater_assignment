import React, { useRef, useState } from 'react'

function Brands() {
    const [brandNames, setbrandNames] = useState(new Set())
    const inputRef = useRef(null);

    function addBrandName(){
        if(inputRef.current.value!=""){
            setbrandNames(prevValue=> new Set([...prevValue,inputRef.current.value]))
        }
    }

    return (
        <div>
            <input ref={inputRef} placeholder='brand'/>
            <button onClick={addBrandName}>Add</button>
            {
                Array.from(brandNames).map(value=>(
                    <p>{value}</p>
                ))
            }
        </div>
    )
}

export default Brands