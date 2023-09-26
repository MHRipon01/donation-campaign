import Input from "./Input";

const Banner = ({setAllDonations ,searchTerm ,setSearchTerm ,filterData}) => {
  console.log(setAllDonations);
  return (
    <div>
      <div
        className="w-full h-[80vh]  bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: "url('https://i.ibb.co/4Rp8ggG/bg-img.jpg')",
        }}
      >
        <div className="w-full h-full bg-white bg-opacity-95 flex items-center justify-center">
          <span className="text-black  w-1/2 text-center">
            <div className="text-4xl font-bold">I Grow By Helping People In Need. </div>
             <div className="flex justify-center mt-6 w-full  items-center  ">
            <Input setAllDonations={setAllDonations} setSearchTerm={setSearchTerm} searchTerm={searchTerm} filterData={filterData}></Input>
          </div>
          </span>
         
        </div>
      </div>

      {/* 
        <div className="h-[70vh] bg-gray-300  " >
            <img className="w-full h-full " src="/src/bg-img.jpg" alt="" />
        </div> */}
    </div>
  );
};

export default Banner;
