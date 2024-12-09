import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Login}></Route>
          <Route path="/login" Component={Login}></Route>
          <Route path="/signup" Component={Signup}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
