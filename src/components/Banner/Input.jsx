

const Input = ({filterData ,searchTerm ,setSearchTerm }) => {

  
    return (
        <div>
    <div >
  <form>
    <div >
      <div >
        
      
      </div>
      <div className="flex justify-center w-full space-x-4 ">
        <div className="flex rounded-md  overflow-hidden w-full">
          <input onChange={event => setSearchTerm(event.target.value)} type="text" placeholder="Search here..." className="md:w-[500px]  px-5  border-2 border-[#DEDEDE] rounded-md  rounded-r-none" />
          <button type="button" onClick={()=> filterData()} className="bg-[#FF444A] text-white px-6 text-lg font-semibold py-4 rounded-r-md">Go</button>
        </div>
      </div>
    </div>
  </form>
</div>
        </div>
    );
};

export default Input;