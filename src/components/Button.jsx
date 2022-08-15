import React from "react"

export const Button = ({buttonName, handleClick, className, buttonText}) => {
    return (
        // Button component
        <button
            // setting classname for styling
            className={className}
            // Chainging color based on userType
            style={{
                background: buttonName === "Owner" ? "#052B12" : "#267693"
            }}
            //invoking click function seding a object as function parameter
            onClick={() => handleClick({buttonName: buttonName, buttonText: buttonText})}
        >
            {buttonText}
        </button>
        )
}