import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Home from "./Home";

function App() {
  return (
    <>
     
        <Routes>
          <Route path="/" element={<Login value={true}/>}></Route>
          <Route path="/signup" element={<Signup value={false}/>}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
     
    </>
  );
}
export default App;
