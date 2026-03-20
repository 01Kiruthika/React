import React, { useState } from 'react'

const Norender = () => {

    const [count, setCount] = useState(0)

    let Change = () => {
        setCount()
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={Change}>Count Me</button>
        </>
    )
}

export default Norender
