import Home from "../homes/Home";
import Navbar from "../navbar/Navbar";

const Main = () => {
  return (
    <div className=" flex flex-col">
      <Navbar />
      <Home />
    </div>
  );
};

export default Main;
