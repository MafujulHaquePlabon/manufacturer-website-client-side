import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Blog from './Pages/Blog/Blog';
import My_Portfolio from './Pages/My_Portfolio/My_Portfolio';
import Dashboard from './Pages/Dashboard/Dashboard';
import RequireAuth from './Pages/Login/RequireAuth';
import PurchaseItem from './Pages/Purchase/PurchaseItem';
import AddAReview from './Pages/Dashboard/AddAReview';
import MyProfile from './Pages/Dashboard/MyProfile';


function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/carPartsItems/:id" element={<RequireAuth><PurchaseItem></PurchaseItem></RequireAuth>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Login" element={<Login></Login>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/my_portfolio" element={<my_portfolio></my_portfolio>} />
        <Route path="/dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>} >
       
          </Route>
      
      </Routes>
    </div>
  );
}

export default App;
