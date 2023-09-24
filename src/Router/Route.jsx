import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";


    const myCreatedRoute = createBrowserRouter([
        {
            path: '/',
            element:<MainLayout></MainLayout>,
            errorElement:<ErrorPage></ErrorPage>
            , children: [
                {
                    path: '/',
                    element: <Home></Home>,
                    loader: () => fetch('/donation.json')
                }
            ]
        }
    ])



 

export default myCreatedRoute;