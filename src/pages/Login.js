import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import classes from "./Login.module.scss";
import '../styles/App.css';

const Login = () => {

    const [errorMessages, setErrorMessages] = useState({})
    const [isSubmitted, setIsSubmitted] = useState(false)

    const navigate = useNavigate()

    const database = [
        {
            username: "user1",
            password: "pass1"
        },
        {
            username: "user2",
            password: "pass2"
        },
    ]

    const errors = {
        uname: "invalid username",
        pass: " invalid password"
    }

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
    
        var { uname, pass } = document.forms[0];
    
        // Find user login info
        const userData = database.find((user) => user.username === uname.value);
    
        // Compare user info
        if (userData) {
          if (userData.password !== pass.value) {
            // Invalid password
            setErrorMessages({ name: "pass", message: errors.pass });
          } else {
            setIsSubmitted(true);
          }
        } else {
          // Username not found
          setErrorMessages({ name: "uname", message: errors.uname });
        }
      }

    const renderErrorMessage = (name) => {
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        )
    }
    

    const renderForm = (
        <div className={classes.login_form}>
            <div className={classes.title}>Sign In</div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username </label>
                    <input type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div>
                    <label>Password</label>
                    <input className={classes.input_pass} type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                </div>
                <div>
                    <input className={classes.submit_button} type="submit" />
                </div>
            </form>
        </div>
    )



    return (
        <div className={classes.final_form}>
            <div className={classes.login_form}>
                {isSubmitted ? 
                <div className="answer">
                    
                    User is successfully logged in
                    <Link to="/presentupload">
                        <h4>Upload Your Files</h4>
                    </Link>
                
                </div> 
                : renderForm}
            </div>
        </div>
    )
};

export default Login;