import React from 'react'

// const chlid = (props) => {
const chlid = ({title,onClick}) => {



    // const { title , onClick} = props

    
    // key and value la iruthu value pass aguthu through props like Destructure



    // const { onClick } = props


    return (
        <>
            <h2>{title}</h2>
            <button onClick={onClick }>Change me</button>
        </>
    )
}

export default chlid
