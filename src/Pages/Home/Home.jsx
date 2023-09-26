import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import AllDonations from "../../components/All-Donations/AllDonations";
import { useState } from "react";


 

const Home = () => {
    

    const [allDonations ,setAllDonations] = useState(useLoaderData())

   const [searchTerm, setSearchTerm] = useState("");
   
const [check ,setcheck] =useState(allDonations)
// console.log(allDonations);

function filterData(){
    const filteredDonations = allDonations.filter(donation =>  
            donation.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        console.log(filteredDonations);
        setcheck(filteredDonations)
        }

    return (
        <div>
            <Banner setSearchTerm={setSearchTerm} searchTerm={searchTerm} filterData={filterData}></Banner>
            <AllDonations allDonations={allDonations} searchTerm={searchTerm} check={check}></AllDonations>
            
        </div>
    );
};

export default Home;