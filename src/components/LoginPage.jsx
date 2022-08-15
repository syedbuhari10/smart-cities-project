import React from "react";
import { Form } from "./Form";

export const LoginPage = ({handleClick}) => {
    return (
        <div className="page">
        {/* Houses all the buttons for login page */}
        <Form 
            handleClick={handleClick}
        />
        <div className="footer">
          <img src="/bottom_img.svg" alt="" className='bottom--image' />
        </div>
      </div>
    )
}