import React from 'react';
import Login from './Login';
import SignupModal from './SignupModal';
import {Link} from 'react-router';
import { connect } from 'react-redux';
// import {login} from 'APP/app/reducers/auth'

export default ({user, logout, ascending, descending}) => {
    console.log('ascending....',ascending)
    console.log('ascending....',descending)
        return (
            <div className="row">
                <div id="nav-column" className="col-md-12">
                    <nav className="navbar navbar-default" role="navigation">
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        </button>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                        {
                            user ? 
                            <li><span id="welcome-msg">Welcome Back, {user.firstName}!</span></li>
                            : 
                             <li><a href="#">Home</a></li>
                        }
                            
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Categories <b className="caret"></b></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Highest ratings</a></li>
                                    <li><a onClick={ascending} href="#">Price Ascending</a></li>
                                    <li><a onClick={descending} href="#">Price Descending</a></li>
                                    <li className="divider"></li>
                                </ul>
                            </li>
                        </ul>

                            

                            {
                                user ? 
                                <ul className="nav navbar-nav navbar-right">
                                    <li><a onClick={logout} href="#">Sign out</a></li>
                                    <li>
                                        <Link to={`/user/${user.id}`}>
                                            <li>Your Account</li>
                                        </Link>
                                    </li>
                                </ul> 
                            : 
                            <ul className="nav navbar-nav navbar-right">
                            <SignupModal />
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Sign in <b className="caret"></b></a>
                                <ul className="dropdown-menu">
                                    <li>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <Login />
                                        </div>
                                    </div>
                                    </li>
                                    
                                </ul>
                            </li>
                            </ul>
                            }

                        </div>
                    </nav>
                </div>
            </div>
        )
};


