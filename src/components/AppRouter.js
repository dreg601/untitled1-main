import React, {useContext} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {AuthRoutes, PublicRoutes} from "../routes";
import {AUTH_ROUTE} from "../utils/Consts";
import {Context} from "../index";


const AppRouter = () => {
    const {agent} = useContext(Context);
    return (
        <Switch>
            {agent.isAuth && AuthRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {PublicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={AUTH_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;
