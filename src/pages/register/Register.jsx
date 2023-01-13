import React from 'react'
import { Link } from 'react-router-dom'
import "./register.scss"

const Register = () => {
  return (
    <div className = "register">
        <div className="card">
            <div className="left">
                <h1>Anooj Social!</h1>
                <p>Welcome to a social media app I am trying to create to understand more about React and fullstack developement</p>
                <span>Do you have an account?</span>
                <Link to = "/login">
                  <button>Log In</button>
                </Link>
            </div>
            <div className="right">
                <h1>Register</h1>
                <form>
                    <input type="text" placeholder = "UserName" />
                    <input type="email" placeholder = "Email" />
                    <input type="password" placeholder = "Password" />
                    <input type="text" placeholder = "Name" />
                    <button>Register</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register