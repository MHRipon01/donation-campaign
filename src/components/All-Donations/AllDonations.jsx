import DonationCard from "./DonationCard";



//Json file theke data ene map kora hoise.








// eslint-disable-next-line react/prop-types
const AllDonations = ({allDonations}) => {
    return (
        <div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-5 m-6 ">
                {
                    // eslint-disable-next-line react/prop-types
                    allDonations.map(donation => <DonationCard  key={donation.price} donation={donation}></DonationCard>)
                }
            </div>
        </div>
    );
};

export default AllDonations;