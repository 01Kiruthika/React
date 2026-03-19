import React, { useState } from 'react'
import Chlid from './chlid.jsx'
// import PassComponent from './PassComponent.jsx'

const Index = () => {

    const [name, setName] = useState("Welcome")

    let ChangeName = () => {
        setName("Welcome to React.js")

    }
    // Passing a function as porops

    return (
        <>
            {/* <PassComponent / > */}
                <Chlid title={name} onClick={ChangeName} />
                {/* title={name}====>It is a Key value pair and ChangeName is a Function and name is a variable here*/}
            {/* </PassComponent > */}


        </>
    )
}

export default Index
