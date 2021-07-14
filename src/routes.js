import {ADMIN_ROUTE, AUTH_ROUTE, MAIN_ROUTE, REG_ROUTE, START_ROUTE} from "./utils/Consts";
import Admin from "./pages/Admin";
import MainPage from "./pages/MainPage";
import Auth from "./pages/Auth";
import StartPage from "./pages/StartPage";
import RegPage from "./pages/RegPage";


export const AuthRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin,
    },
    {
        path: MAIN_ROUTE,
        Component: MainPage,
    },
    {
        path: AUTH_ROUTE,
        Component: Auth,
    },
    {
        path: START_ROUTE,
        Component: StartPage,
    },
    {
        path: REG_ROUTE,
        Component: RegPage,
    }
]

export const PublicRoutes = [
    {
        path: AUTH_ROUTE,
        Component: Auth,
    },
]
