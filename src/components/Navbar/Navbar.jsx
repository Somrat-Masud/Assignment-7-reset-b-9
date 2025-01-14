import logo from "../../assets/img/logo.png";
import imoji from "../../assets/img/imoji.png";

const Navbar = ({ balance }) => {
  return (
    <navbar>
      <div className="navbar bg-base-100 fixed z-20">
        <div className="">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3  p-2 shadow"
            >
              <li>Home</li>
              <li>Fixture</li>
              <li>Teams</li>
              <li>Schedules</li>
            </ul>
          </div>

          <a>
            <img src={logo} alt="" />
          </a>
        </div>
        <div className=" hidden lg:flex navbar-end ml-60  ">
          <ul className="menu menu-horizontal text-xl gap-8">
            <li>Home</li>
            <li>Fixture</li>
            <li>Teams</li>
            <li>Schedules</li>
          </ul>
        </div>
        <div className=" ml-10 ">
          <div className="  border rounded-xl  px-4">
            <div className="flex items-center">
              <span className=" "> {balance} Coin</span>
              <img className="w-6" src={imoji} alt="" />
            </div>
          </div>
        </div>
      </div>
    </navbar>
  );
};

export default Navbar;
