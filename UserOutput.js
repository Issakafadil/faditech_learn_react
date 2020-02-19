import React from 'react'

const  UserOutput= (props)=> {
    return (
        <div>
            <p style = {{color: "red"}}>This is {props.username}'s first Paragraph</p>
            <p style = {{color: "green"}}>This is {props.username}'s second Paragraph</p>
            <p style = {{color: "orange"}}onClick={props.click}>Click to change the name of my choice of name</p>
        </div>
    )
}

export default UserOutput