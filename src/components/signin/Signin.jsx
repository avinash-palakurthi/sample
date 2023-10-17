import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { auth, googleProvider } from "../../firebase/setup";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const googleSignin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      auth.currentUser && navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" flex flex-col items-center bg-black h-screen text-white flex-wrap  ">
      <h1 className="text-[1.3rem] sm:text-lg md:text-xl lg:text-2xl lg:font-semibold lg:text-blue-500 mt-[6rem] text-gray-400">
        Share your opinions with public . . .
      </h1>
      <p className="text-sm sm:text-lg md:text-xl md:text-orange-500 md:font-semibold lg:text-2xl lg:font-semibold lg:text-red-500 mt-3">
        signin with google
      </p>
      <button
        className="mt-4 bg-slate-700 p-1 w-28 flex justify-center lg:w-[17rem] sm:p-1 rounded-xl"
        onClick={googleSignin}
      >
        <FcGoogle className="text-2xl md:text-3xl  lg:text-5xl" />
      </button>
    </div>
  );
};

export default Signin;
