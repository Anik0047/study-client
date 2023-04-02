import Main from "../Layouts/Main";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";

const { createBrowserRouter } = require("react-router-dom");


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            }
        ]
    }
])
