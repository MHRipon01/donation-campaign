import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../LocalStorage/LocalStorage";

const AllDonationShow = () => {
  const donations = useLoaderData();
  // console.log(donations);
  const [appliedDonations, setAppliedDonations] = useState([]);
  const [displayDonations, setDisplayDonations] = useState([]);

  const [isShowAll , setIsShowAll] = useState(false)

  // const { picture ,category,title ,category_bg ,card_bg,text_button_bg, id } = donation || {};

  // setDisplayDonations(appliedDonations)
  useEffect(() => {
    const storedDonationIds = getStoredDonation();
    // console.log(storedDonationIds);
    if (donations.length > 0) {
      // const donationsApplied = donations.filter((donation) => storedDonationIds.includes(donation.id))

      const donationsApplied = [];
      for (const id of storedDonationIds) {
        const donation = donations.find((donation) => donation.id === id);
        if (donation) {
          donationsApplied.push(donation);
        }
      }

      console.log(storedDonationIds, donationsApplied, donations);
      setAppliedDonations(donationsApplied);
      setDisplayDonations(donationsApplied);
    }
  }, [donations]);

  //     const addedDonation = []

  //     const {category} = donation || {}
  // console.log(category);
  //local storage er kaj
  // PhoneCard.jsx

  console.log(isShowAll);

  return (
    <div >
     
     <div className="">
     <ul className="grid grid-cols-1  justify-center items-center lg:grid-cols-2 ">
        {
            isShowAll ? displayDonations.map((donation) => (
                <li key={donation.id} >
                  <span  >
                    <div className="mx-4">
                      <div style={{ backgroundColor: donation.card_bg }} className="relative flex w-full mx-auto gap-4   my-3  rounded-xl   text-gray-700 shadow-md">
                        <div className="relative m-0 w-2/5  overflow-hidden rounded-xl  rounded-r-none bg-white text-gray-700">
                          <img
                            src={donation.picture}
                            alt="image"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="p-3">
                          <h6 style={{ backgroundColor: donation.category_bg ,color:donation.text_button_bg}} className="mb-4  font-sans w-full  max-w-fit p-1 rounded     ">
                            {donation.category}
                          </h6>
                          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {donation.title}
                          </h4>
                          <p className="mb-4 block font-sans text-lg  font-semibold leading-relaxed  antialiased">
                            ${donation.price}
                          </p>
                          <a className="inline-block" href="#">
                            <button style={{ backgroundColor: donation.text_button_bg }}
                              className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all  active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                              type="button"
                            >
                              View Details
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                    
                  </span>
                </li>
              )) 
              :
              displayDonations.slice(0,4).map((donation) => (
                <li key={donation.id} >
                  <span  >
                    <div className="mx-4">
                      <div style={{ backgroundColor: donation.card_bg }} className="relative flex w-full  gap-4  my-3  rounded-xl   text-gray-700 shadow-md">
                        <div className="relative m-0 w-2/5  overflow-hidden rounded-xl  rounded-r-none bg-white text-gray-700">
                          <img
                            src={donation.picture}
                            alt="image"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="p-3">
                          <h6 style={{ backgroundColor: donation.category_bg ,color:donation.text_button_bg}} className="mb-4  font-sans w-full  max-w-fit p-1 rounded     ">
                            {donation.category}
                          </h6>
                          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {donation.title}
                          </h4>
                          <p className="mb-4 block font-sans text-lg  font-semibold leading-relaxed  antialiased">
                            ${donation.price}
                          </p>
                          <a className="inline-block" href="#">
                            <button style={{ backgroundColor: donation.text_button_bg }}
                              className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all  active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                              type="button"
                            >
                              View Details
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                    
                  </span>
                </li>
              ))
        }
      </ul>
     </div>
     
     {
       ( !isShowAll &&  displayDonations.length> 4) && <button onClick={() => setIsShowAll(!isShowAll)} className="bg-green-700 block mx-auto p-2  px-5 font-semibold text-white rounded-lg">See All </button>
     }
    </div>
  );
};

export default AllDonationShow;
