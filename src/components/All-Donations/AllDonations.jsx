import React, { useState } from "react";
import DonationCard from "./DonationCard";
import Input from "../Banner/Input";

// eslint-disable-next-line react/prop-types
const AllDonations = ({allDonations ,searchTerm ,check}) => {
    // eslint-disable-next-line react/prop-types
    console.log(allDonations);
   

    return (
        <div className="absolute ml-1  w-11/12">
           

            <div className="w-full">
            <div className="grid w-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center   xl:grid-cols-4 gap-6 p-5 md:ml-24">
                {
                    check.map(donation => 
                        <DonationCard  key={donation.price}   donation={donation}></DonationCard>
                    )
                }
            </div>
            </div>
        </div>
    );
};

export default AllDonations;

