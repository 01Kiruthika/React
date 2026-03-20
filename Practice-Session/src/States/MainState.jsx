import React, { useState } from 'react'

const MainState = () => {

    // use String

    const [name, setName] = useState("Welcome to React")


    let Handleme = () => {
        setName("I am React js")

    }

    // It is an Object

    const [box, setBox] = useState({ name: 'kalai', value: 210, role: "developer" })

    let Changeme = () => {
        setBox({ ...box, role: "Software" })
    }

    // It is an Array

    const [boxs, setBoxs] = useState([])

    let Handle = () => {
        setBoxs([...boxs, "Hello ,welcome to js"])
    }


    return (
        <>

            {/* It is for String */}

            <h1>using String</h1>
            <h2>{name}</h2>
            {/* <button onClick={()=> setName("hello")}>change me</button> // It is  a  Inline Function */}

            <button onClick={Handleme}>Change Me</button>
            <br></br>
            <br></br>
            <br></br>


            {/* It is for Object */}
            <h1>using Object</h1>
            <h2>{box.role}</h2>
            {/* <button onClick={()=> setName("hello")}>change me</button> // It is  a  Inline Function */}

            <button onClick={Changeme}>Change Me</button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>



            {/* It is for Array */}
            <h1>using Array</h1>
            <h2>{boxs}</h2>
            {/* <button onClick={()=> setName("hello")}>change me</button> // It is  a  Inline Function */}

            <button onClick={Handle}>Change Me</button>

        </>
    )
}

export default MainState
