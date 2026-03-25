import React from 'react'
import { useState } from 'react'
import { useCallback } from 'react'

const UseCallback = () => {
    const [count, setCount] = useState(0)

    const increment = useCallback(() => {
        console.log("Function called");

        setCount(prev => prev + 1)
    }, [])
    
    console.log("component render");


    return (
        <div>
            <p>{count}</p>
            <button onClick={increment}>Incre</button>
        </div>
    )
}

export default UseCallback
