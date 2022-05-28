import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
   const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h2 className="text-2xl font-bold text-purple-500">
          Welcome to your Dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">   
        <li>
           <Link to="/dashboard"><button className="font-semibold hover:text-orange-800">MyProfile</button></Link>
              </li>
         {
           admin ? <div>
             <li>
           <Link to="/dashboard/users"><button className="font-semibold hover:text-orange-800">Make_Admin</button></Link>
         </li>
             <li>
           <Link to="/dashboard/Add_a_product"><button className="font-semibold hover:text-orange-800">Add_A_Product</button></Link>
         </li>
             <li>
           <Link to="/dashboard/manage_products"><button className="font-semibold hover:text-orange-800">Manage_Products</button></Link>
           <Link to="/dashboard/Manage_all_orders"><button className="font-semibold hover:text-orange-800">Manage_All_Orders</button></Link>
         </li>
           </div>: <div>
        
              <li>
                <Link to="/dashboard/my_orders"><button className="font-semibold hover:text-orange-800">MyOrders</button></Link>
              </li>
              <li>
                <Link to="/dashboard/add_a_review"><button className="font-semibold hover:text-orange-800">Add_A_Review</button></Link>
              </li>
         </div>
         }
         
          {/*   { admin && <>
              
                        <li><Link to="/dashboard/addDoctor">Add a Doctor</Link></li>
                        <li><Link to="/dashboard/manageDoctor">Manage Doctors</Link></li>
                    </>}  */}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
