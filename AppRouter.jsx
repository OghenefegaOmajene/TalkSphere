
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Body from "./pages/Body/Body";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Chats from "./pages/Chats/Chats";
import SideNav from "./components/SideNav/SideNav";

const Layout = () => {
//   const location = useLocation();
//   const showSidebar = location.pathname.startsWith("/DashBoard");

  return (
    <>
      <SideNav/>
      <Routes>
        {/* Redirect root to HomePage */}
        <Route path="/" element={<Navigate to="/Body" />} />
        <Route path="/Body" element={<Body />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Chats" element={<Chats />} />
        

        
        {/* <Route path="*" element={<Navigate to="/HomePage" />} /> */}
      </Routes>
    </>
  );
};

const AppRouter = () => {
  return (
    <Router>
      <Layout /> {/* Ensure Layout is inside Router */}
    </Router>
  );
};

export default AppRouter;
