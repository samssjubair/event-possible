import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { UserContext } from '../../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    
    return (
        <div>
            <Route
            {...rest}
            render={({ location }) =>
            (loggedInUser.email ) ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                    }}
                />
                )
            }
            />
        </div>
    )
};

export default PrivateRoute;