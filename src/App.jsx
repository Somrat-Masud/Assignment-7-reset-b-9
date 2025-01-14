import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { toast } from "react-toastify";
import ButtonContainer from "./components/ButtonContainer/ButtonContainer";
import "./App.css";
import Subscribe from "./components/Subscribe/Subscribe";

function App() {
  const [balance, setBalance] = useState(0);
  const [isActive, setIsActive] = useState({
    cart: true,
    status: "cart",
  });
  const handleIsActiveStatus = (status) => {
    if (status == "cart") {
      setIsActive({
        cart: true,
        status: "cart",
      });
    } else {
      setIsActive({
        cart: false,
        status: "about",
      });
    }
  };

  const handleAddBalance = () => {
    const newBalance = balance + 70000000;
    setBalance(newBalance);
    toast("successfully added balance");
  };
  const [selectedPlayer, setSelectedPlayer] = useState([]);

  const handleSelected = (player) => {
    const isExist = selectedPlayer.find((p) => p.id == player.id);
    if (balance > player.biddingPrice) {
      if (selectedPlayer.length < 6) {
        if (!isExist) {
          setSelectedPlayer([...selectedPlayer, player]);
          setBalance(balance - player.biddingPrice);
        } else {
          toast("already added");
        }
      } else {
        toast("already 6 player added");
      }
    } else {
      toast("Not a balance!");
    }
  };

  const handlePlayerDelete = (id) => {
    const newHandleDelete = selectedPlayer.filter((p) => p.id !== id);
    setSelectedPlayer(newHandleDelete);
  };

  return (
    <>
      <div className="w-11/12 mx-auto">
        <Navbar balance={balance}></Navbar>
        <Banner handleAddBalance={handleAddBalance}></Banner>
        <ButtonContainer
          isActive={isActive}
          handleIsActiveStatus={handleIsActiveStatus}
          handleSelected={handleSelected}
          selectedPlayer={selectedPlayer}
          handlePlayerDelete={handlePlayerDelete}
        ></ButtonContainer>
        <Subscribe></Subscribe>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
