import logoBanner from "../../assets/img/banner-main.png";
import "./Banner.css";
const Banner = ({ handleAddBalance }) => {
  return (
    <div className="text-center items-center space-y-3 banner-section h-[450px] ">
      <div className="">
        <img className="w-1/4 mx-auto" src={logoBanner} alt="" />
        <h1 className="mt-10 text-gray-400">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className=" text-gray-400">Beyond Boundaries Beyond Limits</p>
        <button
          onClick={() => handleAddBalance()}
          className="btn bg-[#E7FE29]  "
        >
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
