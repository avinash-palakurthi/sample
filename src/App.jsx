import Main from "./components/main/Main";
import Signin from "./components/signin/Signin";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
