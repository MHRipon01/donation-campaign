import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationCard from "../../components/All-Donations/DonationCard";
import Donation from "../Donation/Donation";

const DonationDetails = () => {

    //Home page a kono donation a click korle ai page ashbe.
    // kon donation kisher jonno tar descriptions

    const [donation , setDonation ] = useState()

    const {category} = useParams()

    const donations = useLoaderData()

    useEffect(() => {
        const findDonation = donations?.find(donation => donation.category=== category)

       setDonation(findDonation);
    },[category ,donations])

    // console.log(donation);

    return (
        <div>
        <Donation donation={donation}></Donation>
        {/* <DonationCard donation={donation}></DonationCard> */}

           



        </div>
    );
};

export default DonationDetails;