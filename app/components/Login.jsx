import React from 'react'

export const Login = ({login}) => {
  console.log('......login:',login)
  return (

    <form className="navbar-form" onSubmit={evt => {
    evt.preventDefault()
    login(evt.target.username.value, evt.target.password.value)
  } }>
    <p id="sign-in-comment">Sign in below</p>
    <input id="userinputarea" className="form-control" name="username" placeholder="email" />
    <input className="form-control" name="password" placeholder="password" type="password" />
    <input id="login-button" className="btn btn-default" type="submit" value="Login" />
  </form>)
}

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'



export default connect (
  state => ({}),
  {login},
) (Login)
