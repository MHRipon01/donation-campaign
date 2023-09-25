import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationCard from "../../components/All-Donations/DonationCard";
import Donation from "../Donation/Donation";

const DonationDetails = () => {

    //Home page a kono donation a click korle ai page ashbe.
    // kon donation kisher jonno tar descriptions

    const [donation , setDonation ] = useState()

    const {id} = useParams()

    const donations = useLoaderData()

    useEffect(() => {
        const findDonation = donations?.find(donation => donation.id=== id)

       setDonation(findDonation);
    },[donations ,id])

    // console.log(donation);

    return (
        <div>
        <Donation donation={donation}></Donation>
        

           



        </div>
    );
};

export default DonationDetails;