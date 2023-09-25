import { useEffect, useState } from "react";
import PieChartStyle from "./PieChartStyle";
import { getStoredDonation } from "../LocalStorage/LocalStorage";

const Statistics = () => {
  const [donation, setDonation] = useState(0);
  const [totalDonation, setTotalDonation] = useState(0)
  const totalDonations = 12;
  
  useEffect(() => {
    const storedDonationIds = getStoredDonation();
    console.log(storedDonationIds.length);
    const storedDonationIdsInt = parseInt(storedDonationIds.length)
    // console.log(storedDonationIdsInt);
    setDonation(storedDonationIdsInt)
   
    const remainingDonation = totalDonations - storedDonationIdsInt;
    setTotalDonation(remainingDonation)
}, []);

  return (
    <div>
    
      <PieChartStyle  donation={donation}  totalDonation={totalDonation} ></PieChartStyle>
    </div>
  );
};

export default Statistics;
