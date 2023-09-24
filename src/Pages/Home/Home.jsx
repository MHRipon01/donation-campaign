import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import AllDonations from "../../components/All-Donations/AllDonations";


 

const Home = () => {

    const allDonations = useLoaderData()

// console.log(allDonations);

    return (
        <div>
            <Banner></Banner>
            <AllDonations allDonations={allDonations}></AllDonations>
            
        </div>
    );
};

export default Home;