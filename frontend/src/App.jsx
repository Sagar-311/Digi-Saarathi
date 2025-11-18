import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import EmployerDashboard from "./pages/EmployerDashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/employer/dashboard" element={<EmployerDashboard />} />
      </Routes>
    </>
  );
}

export default App;
