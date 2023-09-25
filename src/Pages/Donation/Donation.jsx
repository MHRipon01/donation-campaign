


//ki ki donation kora hoise ta ai page a show korbe....

import { useLoaderData, useParams } from "react-router-dom";
import { saveDonation } from "../LocalStorage/LocalStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// eslint-disable-next-line react/prop-types
const Donation = () => {

  const donations = useLoaderData()
  const {id} = useParams()
  const idInt = parseInt(id)
  const donation = donations.find(donation => donation.id == idInt)
  // console.log(donation);

const handleDonation =() => {
  saveDonation(idInt)
  toast('successfully donated.')
}

  return (
    <div className="rounded-md flex justify-center items-center">
      <div className="md:w-[1050px]  ">
        <div className="relative ">
          <img
            src={donation.picture}
            alt=" Image"
            className="w-full h-full rounded-lg"
          />

          <div  className=" h-24 bg-opacity-50 relative -top-24 bg-slate-950">
            <button style={{ backgroundColor: donation.text_button_bg }} onClick={handleDonation} className="absolute bottom-5 left-6  text-white px-4 py-2 rounded">
            Donate ${donation.price}
            
          </button>
          </div>
          <ToastContainer/>
        </div>
        <div
          className="w-fit  m-2 px-2"
          style={{ backgroundColor: donation.category_bg }}
        ></div>

        <h3
          className="font-semibold m-2 text-xl"
          style={{ color: donation.text_button_bg }}
        >
          {donation.title}
        </h3>

        <p className="px-3">{donation.description}</p>
      </div>
    </div>
  );
};

export default Donation;













 const addedDonation = []
 