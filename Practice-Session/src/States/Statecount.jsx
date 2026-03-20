import React, { useState } from 'react'

const Statecount = () => {

    // const [count, setCount] = useState(0)


    // let increment = () => {
    //     setCount((prev) => prev + 2)
    // }


    // let decrement = () => {
    //     setCount((prev) => prev - 2)
    // }


    // It is an Object

    const [count, setCount] = useState({ name: 'kalai', value: 10 })


    let increment = () => {
        setCount((prevcount) => {
            return{value : prevcount.value + 1}
        })
    }


    let decrement = () => {
        setCount((prevcount) => {
            return{value : prevcount.value -1}
        })
    }





    return (
        <>

            <h2>{`Count value is ${count.value}`}</h2>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>

        </>
    )
}

export default Statecount
