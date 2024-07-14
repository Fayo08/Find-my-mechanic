import { useState } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";

import Homepage from "./pages/Homepage/Homepage";
import BookService from "./pages/BookService/BookService";
import HomepageCopy from "./pages/HomepageCopy/HomepageCopy";
import GetMechanic from "./pages/GetMechanic/GetMechanic";
import MechanicDetails from "./pages/MechanicDetails/MechanicDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/services" element={<BookService />}></Route>
        <Route path="/homepage-copy" element={<HomepageCopy />}></Route>
        <Route path="/services/category/:category/mechanics" element={<GetMechanic />}></Route>
        <Route path="/mechanics/:id" element={<MechanicDetails />}></Route>

        




      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
