//Home page er all donation card show korano hoise.

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const DonationCard = ({ donation }) => {
  const { picture ,category,title ,category_bg ,card_bg,text_button_bg, } = donation || {};
// console.log(text_button_bg);
  // console.log(picture);
// const bg= `bg-[${text_button_bg}] `
  return (
    <Link to={`/donationDetails/${category}`}>
    <div className="rounded-lg" style={{backgroundColor:card_bg}}>
        {/* <h1 className={text_button_bg.toString()}>donation</h1> */}
      <div>
        <img className="w-full" src={picture} alt="" />
       <div className="w-fit rounded m-3 px-2" style={{backgroundColor: category_bg}}>
       <h1  style={{color:text_button_bg}}>{category}</h1>
       </div>
       
        <h3 className="font-semibold m-2 text-xl" style={{color:text_button_bg}}>{title}</h3>
        
      </div>
    </div>
    </Link>
    
  );
};

export default DonationCard;
