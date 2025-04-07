import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ReservationPage from "./pages/ReservationPage/ReservationPage";
import { Navigate } from "react-router-dom";
import DashBoard from "./pages/DashBoard/DashBoard";
import NewAdmin from "./pages/NewAdmin/NewAdmin";
import UpdateAdmin from "./pages/UpdateAdmin/UpdateAdmin";
import NewHall from "./pages/NewHall/NewHall";
import UpdateHall from "./pages/UpdateHall/UpdateHall";
import DisplayAdmins from "./pages/DisplayAdmins/DisplayAdmins";
import DisplayHalls from "./pages/DisplayHalls/DisplayHalls";
import ApproveReservations from "./pages/ApproveReservations/ApproveReservations";
import { checkRole } from "./assets/CheckRole";

function App() {
  const [isDirector, setIsDirector] = useState(false);
  useEffect(() => {
    const check = checkRole();
    if (check === "Director") {
      setIsDirector(true);
    }
    // console.log("Role in route: ", check, " and ", isDirector);
  }, []);
  return (
    <>
      <Routes>
        {/* Public routes  */}
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/reservation" element={<ReservationPage />}></Route>

        {/* Restricted routes */}
        <Route path="/dashboard/:aId" element={<DashBoard />}></Route>
        <Route path="/register" element={<NewAdmin />}></Route>
        <Route path="/updateAdmin/:aId" element={<UpdateAdmin />}></Route>
        <Route path="/addHall" element={<NewHall />}></Route>
        <Route path="/updateHall/:hId" element={<UpdateHall />}></Route>
        <Route path="/displayAdmins" element={<DisplayAdmins />}></Route>
        <Route path="/displayHalls" element={<DisplayHalls />}></Route>
        <Route
          path="/approveReservation"
          element={<ApproveReservations />}
        ></Route>

        {/* Handling invalid routes and redirect to the home page  */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
