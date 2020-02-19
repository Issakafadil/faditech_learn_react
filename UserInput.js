import React from 'react'

const  UserInput = (props) => {
    const inputStyle ={
        backgroundColor: "DodgerBlue",
        color: "white",
        padding: "3px",
        fontfamily: "Ariel",
        width: "20%",
        fontSize: "24px",
        borderRadius: "5px"
      }
    return (
        <div>
            <p style = {{color: "orange", fontSize: "24px"}}>My username is {props.username}</p>
            <input type="text"  style ={inputStyle} onChange= {props.changeName} value ={props.username}/>
        </div>
    )
}
export default UserInput