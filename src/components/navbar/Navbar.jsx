import { CiLogin, CiSearch, CiLogout } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/setup";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  // console.log("myname:", auth.currentUser.displayName);

  return (
    <div className="bg-black w-auto h-auto  sm:h-auto md:h-auto lg:h-auto text-white flex justify-evenly items-center  shadow-sm border-b border-gray-700">
      <div className="  flex justify-between  sm:pl  ">
        <h2 className="text-red-700 font-semibold text-[30px] mt-1 sm:text-[1.5rem] md:text-[2rem] lg:pl-8 pr-3">
          RedPill
        </h2>
        <div className="flex justify-between items-center pl-1">
          {auth.currentUser ? (
            <button
              className="pr-2 flex  items-center hover:text-blue-400 ease-in-out duration-300 justify-center rounded-lg text-[12px] mt-1 sm:text-[1.2rem] lg:text-[1.4rem] text-orange-600"
              onClick={logout}
            >
              <CiLogout className="  text-xl font-bold sm:text-[1.8rem] sm:font-semibold md:text-[2rem]" />
              logout
            </button>
          ) : (
            <Link to={"/signin"}>
              <button className="pr-2 flex  items-center hover:text-blue-400 ease-in-out duration-300 justify-center rounded-lg text-[12px] mt-1 sm:text-[1.2rem] lg:text-[1.4rem]">
                <CiLogin className="  text-xl font-bold sm:text-[1.8rem] sm:font-semibold md:text-[2rem]" />
                signin
              </button>
            </Link>
          )}
        </div>
      </div>
      <div className="lg:flex sm:flex md:flex pl-[18px] text-[8px] gap-2 sm:text-[14px] md:text-[14px] md:pl-6 flex-wrap lg:pl-[1rem]  lg:font-thin items-center hidden ">
        <button className="capitalize hover:text-red-600 lg:text-[1.3rem] lg:px-4 ease-in-out duration-300">
          Home
        </button>
        <button className="capitalize ease-in-out duration-300 lg:text-[1.3rem] hover:text-red-600 lg:px-4">
          news
        </button>
        <button className="capitalize hover:text-red-600 lg:text-[1.3rem] ease-in-out duration-300 lg:px-4">
          culture
        </button>
        <button className=" ease-in-out duration-300 capitalize hover:text-red-600 lg:text-[1.3rem] lg:px-4">
          technology
        </button>
        <button className="capitalize hover:text-red-600  ease-in-out duration-300 lg:text-[1.3rem] lg:px-4">
          travel
        </button>
      </div>
      <div className="dropdown sm:hidden md:hidden lg:hidden xl:hidden ">
        <label
          tabIndex={0}
          className=" bg-black border-emerald-500 text-emerald-400 "
        >
          <RxHamburgerMenu className="  hover:text-emerald-400" />
        </label>
        <div
          tabIndex={0}
          className="dropdown-content z-[1] menu-vertical   shadow   text-white rounded-lg w-[8rem] bg-black  flex   items-center justify-start"
        >
          <button className="capitalize hover:text-red-600 lg:text-[1.3rem] lg:px-4 ease-in-out duration-300">
            Home
          </button>
          <button className="capitalize ease-in-out duration-300 lg:text-[1.3rem] hover:text-red-600 lg:px-4">
            news
          </button>
          <button className="capitalize hover:text-red-600 lg:text-[1.3rem] ease-in-out duration-300 lg:px-4">
            culture
          </button>
          <button className=" ease-in-out duration-300 capitalize hover:text-red-600 lg:text-[1.3rem] lg:px-4">
            technology
          </button>
          <button className="capitalize hover:text-red-600  ease-in-out duration-300 lg:text-[1.3rem] lg:px-4">
            travel
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center  lg:pl-[1rem] pr-2 outline-none border-none ">
        <CiSearch className="text-white text-sm lg:text-[1.5rem]  " />
        <input
          placeholder="search "
          className="bg-slate-200 w-[4rem] lg:w-[6rem]"
        />
      </div>
    </div>
  );
};

export default Navbar;
