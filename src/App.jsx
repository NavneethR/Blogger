import {Routes, Route } from "react-router-dom";
import PrivateLayout from './Components/Layouts/PrivateLayout';
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateLayout/>}>
          <Route path="/" element={<Home/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
