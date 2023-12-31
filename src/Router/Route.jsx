import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import DonationDetails from "../Pages/DonationDetails/DonationDetails";
import AllDonationShow from "../Pages/AllDonationShow/AllDonationShow";
import Statistics from "../Pages/Statistics/Statistics";


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
                },
                {
                    path: '/donationDetails/:id',
                    element: <DonationDetails></DonationDetails>,
                    loader: () => fetch('/donation.json')
                },
                {
                    path:'/donation',
                    element:<Donation></Donation>,
                    loader: () => fetch('/donation.json')
                },
                {
                    path: '/alldonation',
                    element: <AllDonationShow ></AllDonationShow>,
                    loader:() => fetch('/donation.json')
                },
                {
                    path: '/statistics',
                    element: <Statistics></Statistics>
                }
            ]
        }
    ])



 

export default myCreatedRoute;