import React from "react";
import '../Assets/css/button.css'

export default function ButtonComp({ backgroundColor = '#0077b6', onClick, children }) {
    const buttonStyle = {
        backgroundColor,
    }
    return (
        <button className="button"
            style={buttonStyle}
            onClick={onClick}>
            {children}
        </button>
    )
}