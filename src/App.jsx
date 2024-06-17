import {Routes, Route } from "react-router-dom";
import PrivateLayout from './Components/Layouts/PrivateLayout';
import Home from "./pages/Home";
import CategoryList from "./pages/CategoryList";
import PostList from "./pages/PostList";
import Setting from "./pages/Setting";
import Profile from "./pages/Profile";
import PublicLayout from "./Components/Layouts/PublicLayout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateLayout/>}>
          <Route path="/" element={<Home/>}></Route>
          <Route path="categories" element={<CategoryList/>}/>
          <Route path="posts" element={<PostList/>}/>
          <Route path="setting" element={<Setting/>}/>
          <Route path="profile" element={<Profile/>}/>
        </Route>
        <Route element={<PublicLayout/>}>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
