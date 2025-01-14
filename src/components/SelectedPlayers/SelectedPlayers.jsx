const SelectedPlayers = ({
  handleIsActiveStatus,
  selectedPlayer,
  handlePlayerDelete,
}) => {
  return (
    <div className="">
      {selectedPlayer.map((select, idx) => (
        <div key={idx}>
          <div className="flex justify-between items-center border-2 p-2 m-4 rounded-lg">
            <div className="flex items-center gap-4">
              <div>
                <img className="w-24 rounded-lg" src={select.image} alt="" />
              </div>
              <div className="">
                <h2 className="text-2xl font-bold mb-2">{select.name}</h2>
                <p className="text-gray-600">{select.role}</p>
                <hr />
                <p className="py-2 ">${select.biddingPrice}</p>
              </div>
            </div>
            <div>
              <img
                onClick={() => handlePlayerDelete(select.id)}
                className="w-10"
                src="https://img.icons8.com/?size=100&id=57061&format=png&color=000000"
                alt=""
              />
            </div>
          </div>
        </div>
      ))}
      <div className="flex">
        <button
          onClick={() => handleIsActiveStatus("cart")}
          className="btn border-2 border-blue-600 p-4 m-4 bg-[#E7FE29] font-bold"
        >
          Add More Player
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayers;
