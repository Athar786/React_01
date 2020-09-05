import React from 'react';
const Button = (props) => {
    return(
        <div style = {{
            display:'flex',
            justifyContent:"center",
            alignItem:"center",
            height:50,
            width:100,
            backgroundColor:"black",
            margin:"0px 10px 0px 10px",
        }}>
            <h5 style = {{color:"white"}}>
                {props.title}
            </h5>
        </div>
    )
}
export default Button;