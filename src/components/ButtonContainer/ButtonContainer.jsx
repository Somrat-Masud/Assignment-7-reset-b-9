import { useEffect, useState } from "react";

import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";
import "./ButtonContainer.css";
import Product from "../Product/Product";
import { ToastContainer } from "react-toastify";
const ButtonContainer = ({
  handleIsActiveStatus,
  isActive,
  handleSelected,
  selectedPlayer,
  handlePlayerDelete,
}) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("../public/data.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <div className="mt-10 mb-12">
      <div className="flex">
        <h2 className="text-3xl font-bold mt-4 mb-4">
          {isActive.cart
            ? "Available Players"
            : `Selected Players ${selectedPlayer.length} /6`}
        </h2>
        <div className=" gap-2 flex ">
          <button
            className={`${isActive.cart ? "btn active" : "btn"}`}
            onClick={() => handleIsActiveStatus("cart")}
          >
            Available
          </button>
          <button
            className={`${isActive.cart ? "btn" : "btn active"}`}
            onClick={() => handleIsActiveStatus("about")}
          >
            Selected ({selectedPlayer.length})
          </button>
        </div>
      </div>
      <div>
        <ToastContainer />
      </div>
      <div>
        {isActive.cart ? (
          <div className="players-container grid lg:grid-cols-3 grid-cols-1 gap-4 ">
            {players.map((player) => (
              <Product
                key={player.id}
                player={player}
                handleSelected={handleSelected}
              ></Product>
            ))}
          </div>
        ) : (
          <SelectedPlayers
            handleIsActiveStatus={handleIsActiveStatus}
            selectedPlayer={selectedPlayer}
            handlePlayerDelete={handlePlayerDelete}
          ></SelectedPlayers>
        )}
      </div>
    </div>
  );
};

export default ButtonContainer;
