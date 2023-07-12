import { useState } from "react";

function Login() {

    /**
     * This function runs when the form is submitted
     * Checks that the username and password are not empty
     */
    function required() {
        let username = document.forms["login"]["uname"].value
        let password = document.forms["login"]["pword"].value

        if (username === "" || password === "") {
            alert("Please input a value")
            return false
        } else {
            alert("code accepted\n" + username + "\n" + password)
            return true
        }
    }
    
    /**
     * HTML form
     */
    return (
        <div>
            <form name="login" onSubmit={required}>
                <label>Username</label>
                <input name="uname" type="text"/>                
                <br/>
                <label>Password</label>
                <input name="pword" type="password"/>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default Login