import React from "react";

const Button = ({value, handleClick}) => {

    return (
        <button className="square" onClick={handleClick}>{value}</button>
    )
};

export default Button;