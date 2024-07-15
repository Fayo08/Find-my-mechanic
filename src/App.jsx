import { useState } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";

import Homepage from "./pages/Homepage/Homepage";
import BookService from "./pages/BookService/BookService";
import GetLocation from './pages/GetLocation/GetLocation'
import GetMechanic from "./pages/GetMechanic/GetMechanic";
import MechanicDetails from "./pages/MechanicDetails/MechanicDetails";
import MechanicDistance from "./pages/MechanicDistance/MechanicDistance";
import PostReview from "./pages/PostReview/PostReview";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/bookservices" element={<BookService />}></Route>
        <Route path="/get-location" element={<GetLocation />}></Route>
        <Route path="/services/category/:category/mechanics" element={<GetMechanic />}></Route>
        <Route path="/mechanics/:mechanicId" element={<MechanicDetails />}></Route>
        <Route path="/distance/:mechanicId" element={<MechanicDistance />}></Route>
        <Route path="/post-review/:mechanicId" element={<PostReview />}></Route>

        


        




      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
