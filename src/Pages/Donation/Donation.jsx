//ki ki donation kora hoise ta ai page a show korbe....

// eslint-disable-next-line react/prop-types
const Donation = ({ donation }) => {
  const {
    picture,
    category,
    title,
    category_bg,
    card_bg,
    text_button_bg,
    description,
  } = donation || {};

  console.log(description, category, title);

  return (
    <div className="rounded-md flex justify-center items-center">
      <div className="md:w-[1050px]  ">
        <div className="relative ">
          <img
            src={picture}
            alt=" Image"
            className="w-full h-full rounded-lg"
          />

          <div className="  border-2 border-r-blue-900 bg-slate-700">
            <button className="absolute bottom-5 left-6 bg-red-500 text-white px-4 py-2 rounded">
            Donate $290
          </button>
          </div>
          
        </div>
        <div
          className="w-fit  m-3 px-2"
          style={{ backgroundColor: category_bg }}
        ></div>

        <h3
          className="font-semibold m-2 text-xl"
          style={{ color: text_button_bg }}
        >
          {title}
        </h3>

        <p>{description}</p>
      </div>
    </div>
  );
};

export default Donation;
