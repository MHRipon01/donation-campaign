import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";

 

const Home = () => {

    const allDonations = useLoaderData()
console.log(allDonations);

    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;