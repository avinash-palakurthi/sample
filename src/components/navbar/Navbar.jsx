import { CiLogin, CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  return (
    <div className="bg-black  h-10  sm:h-auto md:h-auto lg:h-auto text-white flex justify-evenly">
      <div className=" pl-1 flex items-center  gap-2 sm:pl  lg:px-2 lg:pl-[3rem]">
        <h2 className="text-red-700 font-bold text-[13px] mt-1 sm:text-[1.5rem] md:text-[2rem] lg:pl-8 pl-5">
          RedPill
        </h2>
        <button className="flex  items-center hover:text-blue-400 ease-in-out duration-300 justify-center rounded-lg text-[12px] mt-1 sm:text-[1.2rem] lg:text-[1.4rem]">
          <CiLogin className="  text-xl font-bold sm:text-[1.8rem] sm:font-semibold md:text-[2rem]" />
          signin
        </button>
        <p className="border-r h-6 border-gray-500 lg:pl-[2rem]"></p>
      </div>
      <div className="lg:flex sm:flex md:flex pl-[18px] text-[8px] gap-2 sm:text-[14px] md:text-[14px] md:pl-6 flex-wrap lg:pl-[5rem] lg:gap-5 items-center hidden ">
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
          travel{" "}
        </button>
        <p className="border-r h-6 border-gray-500 md:pl-6 lg:pl-[2rem] "></p>
      </div>
      <div className="lg:hidden pl-4 md:hidden  items-center flex">
        <RxHamburgerMenu className="text-white hover:text-emerald-400" />
      </div>
      <div className="flex items-center justify-center  lg:pl-[3rem] outline-none border-none">
        <CiSearch className="text-white text-sm lg:text-[1.5rem] " />

        <input
          type="text"
          placeholder="search"
          className=" w-20 bg-transparent bg-slate-600  text-center border-none  outline-none"
        />
      </div>
    </div>
  );
};

export default Navbar;
