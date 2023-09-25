


//ki ki donation kora hoise ta ai page a show korbe....

import { useLoaderData, useParams } from "react-router-dom";
import { saveDonation } from "../LocalStorage/LocalStorage";
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
const Donation = () => {

  const donations = useLoaderData()
  const {id} = useParams()
  const idInt = parseInt(id)
  const donation = donations.find(donation => donation.id == idInt)
  // console.log(donation);

const handleDonation =() => {
  saveDonation(idInt)
  toast('sccssfll')
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
          
        </div>
        <div
          className="w-fit  m-3 px-2"
          style={{ backgroundColor: donation.category_bg }}
        ></div>

        <h3
          className="font-semibold m-2 text-xl"
          style={{ color: donation.text_button_bg }}
        >
          {donation.title}
        </h3>

        <p>{donation.description}</p>
      </div>
    </div>
  );
};

export default Donation;













 const addedDonation = []

//   const {
//     picture,
//     category,
//     title,
//     category_bg,
//     text_button_bg,
//     description,
//   } = donation || {};

//   console.log(description, category, title);

  
//   const handleDonation = (donation) => {
//     const addedItem = JSON.parse(localStorage.getItem('donations'))
//     if(!addedItem){
//       addedDonation.push(donation)
//       localStorage.setItem('donations' , JSON.stringify(addedDonation))
//       alert('Donation added')
//       console.log(addedDonation);
//     }else{
//       // eslint-disable-next-line react/prop-types
//       const isExist = addedItem.find(donation => donation.id === id)

//       if(!isExist){
//         addedDonation.push(...addedItem , donation)
//         localStorage.setItem('donations' , JSON.stringify(addedDonation))
//         alert('Donation added')
//         console.log(addedDonation);
//       }else{
//         alert('already added')
//       }


//     }
//   }

// //  localStorage.setItem('donations' , JSON.stringify(donation))
 

















// import { ToastContainer, toast } from 'react-toastify';

//   import 'react-toastify/dist/ReactToastify.css';




// // eslint-disable-next-line react/prop-types
// const Donation = ({donation}) => {
// console.log(donation);
//   const addedDonation = []

  

//   const {
//     picture,
//     id,
//     title,
//     category_bg,
//     price,
//     text_button_bg,
//     description,
//   } = donation ;

//   console.log(id);

//   const handleDonation = () => {
//     const addedItem = JSON.parse(localStorage.getItem('donations'))
//     if(!addedItem){
//       addedDonation.push(donation)
//       localStorage.setItem('donations' , JSON.stringify(addedDonation))
//       alert('Donation added')
//       console.log(addedDonation);
//     }else{
//       // eslint-disable-next-line react/prop-types
//       const isExist = addedItem.find(donation => donation.id === id)

//       if(!isExist){
//         addedDonation.push(...addedItem , donation)
//         localStorage.setItem('donations' , JSON.stringify(addedDonation))
//         alert('Donation added')
//         console.log(addedDonation);
//       }else{
//         alert('already added')
//       }


//     }
//   }

// //  localStorage.setItem('donations' , JSON.stringify(donation))
 

//   console.log(category_bg, title);

//   return (
 
//     <div className="rounded-md flex justify-center items-center"> <ToastContainer/>
//       <div className="md:w-[1050px]  ">
//         <div className="relative ">
//           <img
//             src={picture}
//             alt=" Image"
//             className="w-full h-full rounded-lg"
//           />

//           <div onClick={() => toast('Ja diben hate, ta jabe sathe...')} className=" border-2 border-r-blue-900 bg-slate-700">
//             <button onClick={handleDonation} style={{backgroundColor:text_button_bg}} className="absolute bottom-5 font-semibold left-6  text-white px-4 py-2 rounded">
//             Donate ${price}
            
            
//           </button>
//           </div>
          
//         </div>
//         <div
//           className="w-fit  m-3 px-2"
//           style={{ backgroundColor: category_bg }}
//         ></div>

//         <h3
//           className="font-semibold m-2 text-xl"
//           style={{ color: text_button_bg }}
//         >
//           {title}
//         </h3>

//         <p>{description}</p>
//       </div>
//     </div>
//   );
// };

// export default Donation;
