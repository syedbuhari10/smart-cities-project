import React from "react";
import { Card } from "./Card";
import { useState } from "react";

export const ParkingInterface = ({handleClick, userType}) => {

    return (
        <div className="parking--interface">
            {/* 
                card shows info about user and their options 
                passing down handle click for button
                passing down usertype for button
            */}
            <Card 
                handleClick={handleClick}
                userType={userType}
            />
            <div className="footer">
                <img src="/bottom_img.svg" alt="" className='bottom--image' />
            </div>
        </div>
    )
}