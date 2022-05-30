import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import Blog from "./Pages/Blog/Blog";
import Dashboard from "./Pages/Dashboard/Dashboard";
import RequireAuth from "./Pages/Login/RequireAuth";
import PurchaseItem from "./Pages/Purchase/PurchaseItem";
import AddAReview from "./Pages/Dashboard/AddAReview";
import MyProfile from "./Pages/Dashboard/MyProfile";
import MyOrders from "./Pages/Dashboard/MyOrders";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./Pages/NotFound/NotFound";
import BeforeOrderPurchasePage from "./Pages/BeforeOrderPurchasePage/BeforeOrderPurchasePage";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import AddAProduct from "./Pages/Dashboard/AddAProduct";
import ManageProducts from "./Pages/Dashboard/ManageProducts";
import ManageAllOrders from "./Pages/Dashboard/ManageAllOrders";
import AllUsers from "./Pages/Dashboard/AllUsers";
import Payment from "./Pages/Dashboard/Payment";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/blog" element={<Blog></Blog>} />
      
        <Route
          path="/purchase"
          element={<BeforeOrderPurchasePage></BeforeOrderPurchasePage>}
        />
        <Route
          path="/carPartsItems/:id"
          element={
            <RequireAuth>
              <PurchaseItem></PurchaseItem>
            </RequireAuth>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Login" element={<Login></Login>} />
        <Route path="/my_portfolio" element={<MyPortfolio></MyPortfolio>} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="/dashboard/add_a_review" element={<AddAReview></AddAReview>} ></Route>
          <Route path="/dashboard/my_orders"  element={<MyOrders></MyOrders>} ></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="/dashboard/users" element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>} ></Route>
          <Route path="/dashboard/Add_a_product" element={<AddAProduct></AddAProduct>} ></Route>
          <Route path="/dashboard/manage_products" element={<ManageProducts></ManageProducts>} ></Route>
          <Route path="/dashboard/Manage_all_orders" element={<ManageAllOrders></ManageAllOrders>} ></Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;




