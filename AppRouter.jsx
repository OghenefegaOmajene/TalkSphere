
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Body from "./pages/Body/Body";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Chats from "./pages/Chats/Chats";
import GroupChats from "./pages/GroupChats/GroupChats";
import SideNav from "./components/SideNav/SideNav";
import ProtectedRoute from "./components/ProtectedRoute"; 

const AppRouter = () => {

  return (
    <>
      
      <Router>
        <SideNav/>
        <Routes>
          {/* Redirect root to HomePage */}
          <Route path="/" element={<Navigate to="/Body" />} />
          <Route path="/Body" element={<Body />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Chats" element={<Chats />} />

          {/* <Route element={<ProtectedRoute />}>
            <Route path="/GroupChats" element={<GroupChats />} />
          </Route> */}
          <Route path="/GroupChats" element={<ProtectedRoute><GroupChats /></ProtectedRoute>} />
        </Routes>
      </Router>
    </>
  );
};

// const AppRouter = () => {
//   return (
//     <Router>
//       <Layout /> {/* Ensure Layout is inside Router */}
//     </Router>
//   );
// };

export default AppRouter;
