import React from 'react'

function Form() {
    return (
        <div className="loginbox">
           <h1>Login:</h1>
           <form name="login" action="" method="">
              <div>
                 <label htmlFor="username">Username:</label>
                 <input type="text" placeholder="username" id="username" name="username"></input>
              </div>
              <div>
                 <label htmlFor="email">Email:</label>
                 <input type="email" placeholder="email" id="email" name="email"></input>
              </div>
              <div>
                 <label htmlFor="password">Password:</label>
                 <input type="password" placeholder="password" id="password" name="password"></input>
              </div>
              <div>
                 <label htmlFor="passwordConf">Confirm Password:</label>
                 <input type="password" placeholder="confirm password" id="passwordConf" name="passwordConf"></input>
              </div>
              <button>Submit</button>
           </form>
        </div>
     )
}

export default Form
