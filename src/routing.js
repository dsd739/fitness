import DashBoard from "./components/DashBoard";
import Feeds from "./components/Feeds/Feeds";
import Login from "./components/Login/Login";


export const routing = [
    {
        path: "/",
        element: <Login/>,
    },
    {
        path: "/dashboard",
        element: <DashBoard/>
    },
    {
        path: "/",
        element: <Login/>,
    },
    {
        path: "/feeds",
        element: <Feeds/>
    }
]

// export const routes = [
//     {
//         path:
//     }
// ]