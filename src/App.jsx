import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Form} from "./components/Form"
import { LoginPage } from './components/LoginPage'
import {ParkingInterface} from './components/ParkingInterface'
// import {bottom_img} from "/bottom_img.svg"

function App() {

  //This will choose whether to render Login screen or not
  const [login, setLogin] = useState(false)

  //for choosing user type between client and owner
  const [userType, setUserType] = useState("Owner")

  //click handle function for login page
  const loginHandleClick = (buttonProps) => {
    // The function at button level evokes an object with atts {buttonName, buttonText}
    console.log(buttonProps)
    const {buttonName} = buttonProps
    // console.log(userType + buttonName)
    setUserType(() => buttonName)
    setLogin(true)  
    // console.log(userType)  
  }

  //click handle for UI
  const interfaceHandleClick = ({buttonText}) => {
    // The function at button level evokes an object with atts {buttonName, buttonText}
    if (buttonText === "confirm exit" || buttonText === "Leave Parking")
      setLogin(false)
    if (buttonText === "Enter Parking")
      console.log("Parking Entered!!")
  }

  return (
    <div className="App">
      {/* Renders Login page 
          Pass in handle Click function down to components
      
      */}
      {!login && <LoginPage 
        handleClick={loginHandleClick}
      />}

      {/* Renders UI 
          Pass in handle Click function down to components
      */}
      {login && <ParkingInterface  
        handleClick={interfaceHandleClick}
        userType={userType}
      />}
    </div>
  )
}

export default App
