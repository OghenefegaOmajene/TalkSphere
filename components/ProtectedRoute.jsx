// import { Navigate, Outlet } from "react-router-dom";

// const ProtectedRoute = () => {
//   const token = localStorage.getItem("token"); // Check if user is logged in

//   return token ? <Outlet/> : <Navigate to="/SignUp" replace />;
// };

// export default ProtectedRoute;


import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // Check if user is logged in

  return token ? children : <Navigate to="/Login" replace />;
};

export default ProtectedRoute;
