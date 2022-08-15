import React from "react";
import { Button } from "./Button";

export const Card = ({handleClick, userType}) => {

    // console.log(userType)

    return (
        <div className="card--container">
            <div className="card--header">
                <h3>{userType}</h3>
            </div>
            <div className="card--body">
                {/* render only if client */}
                {userType === "Client" && <div className="card--info">
                    {/* fill in with dynamic data later */}
                    <h4>{`Amount signed: 0 ether`}</h4> 
                    <h4>{`In Time: `}</h4>
                </div>}
                {/* render only if client */}
                {   
                    userType === "Client" ?
                    <div className="client--buttons">
                        <Button 
                            buttonName={userType}
                            buttonText={"Enter Parking"}
                            className={"card--button"}
                            handleClick={handleClick}
                        />

                        <Button 
                            buttonName={userType}
                            buttonText={"Leave Parking"}
                            className={"card--button"}
                            handleClick={handleClick}
                        />
                    </div>   
                    :
                    <Button //for owner
                        buttonName={userType}
                        buttonText={"confirm exit"}
                        className={"card--button"}
                        handleClick={handleClick}
                    />
                }

            </div>
        </div>
    )
}