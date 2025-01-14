const Product = ({ handleSelected, player }) => {
  const {
    name,
    country,
    image,
    biddingPrice,
    choicePlayer,
    name_logo,
    title,
    Ratting,
    battingType,
  } = player;
  return (
    <div className="card bg-base-100 shadow-xl  border-gray-500 mb-5 mt-5">
      <div className="card-body border rounded-xl shadow-xl">
        <figure>
          <img
            className="w-[350px] h-[200px] object-cover rounded-xl"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="flex  mt-4 items-center text-center">
          <img className="w-1/6 rounded-full" src={name_logo} alt="" />
          <p>{name}</p>
        </div>

        <div className="flex justify-start mt-2">
          <p> {country}</p>
          <p className="border border-gray-400 rounded-lg text-center">
            <p>{title}</p>
          </p>
        </div>
        <hr />
        <div className="text-bold text-medium text-black font-semibold">
          <p>{Ratting}</p>
        </div>
        <div className="text-black flex">
          <p>{battingType}</p>
          <p>{battingType}</p>
        </div>
        <div className="justify-start flex items-center space-x-5">
          <h1>Price: ${biddingPrice}</h1>
          <p
            onClick={() => handleSelected(player)}
            className=" border p-2 border-gray-300 rounded-xl text-center cursor-pointer"
          >
            {choicePlayer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
