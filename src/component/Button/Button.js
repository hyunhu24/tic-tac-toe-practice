import React from "react";

export default function Button ({handleClick, buttonValue}) {
    return <button onClick={handleClick}>My Button {buttonValue} Click!!</button>
};