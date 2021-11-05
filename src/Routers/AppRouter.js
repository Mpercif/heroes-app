import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

import { LoginScreen } from "../Components/Login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoout } from "./PrivateRout";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {

  const {user} = useContext(AuthContext)

    return (
    <Router>
      <div>
            <Switch>
                <PublicRoute
                  exact 
                  path="/login" 
                  isAuthenticated={user.logged}
                  component={LoginScreen} 
                />
                <PrivateRoout 
                  isAuthenticated={user.logged}
                  path="/" 
                  component={DashboardRoutes} 
                />
            </Switch>
      </div>
    </Router>

    )
}
