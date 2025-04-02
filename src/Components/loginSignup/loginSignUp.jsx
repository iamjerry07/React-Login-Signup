import React from 'react'
import './loginSignUp.css'

import user_icon from '../Assets/user.png'
import email_icon from '../Assets/email.svg'
import password_icon from '../Assets/password.png'

const loginSignUp = () => {
  return (
    <div className='container'>
      <div className="header">
        <div className="text">SignUp</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
            <img class ="icon" src={user_icon} alt="" />
            <input type="text" />
        </div>
        <div className="input">
            <img class ="icon" src={email_icon} alt="" />
            <input type="email" />
        </div>
        <div className="input">
            <img class ="icon" src={password_icon} alt="" />
            <input type="password" />
        </div>
      </div>
      <div className="forgot-password">Forgot Password? <span>Click Here!!</span></div>
      <div className="submit-container">
        <div className="submit">Sign Up</div>
        <div className="submit">Login</div>
      </div>
    </div>
  )
}

export default loginSignUp
