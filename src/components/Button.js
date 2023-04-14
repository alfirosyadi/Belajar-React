import React from "react";

const Button = (props) => {
    return(
        <div className="button">
            <button onClick={props.buttonClick}>Count</button>
        </div>
    )
}

export default Button;