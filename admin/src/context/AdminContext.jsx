import { createContext, useState } from "react";
import axios from "axios";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const backendUrl = "http://localhost:5000";

  const [adminToken, setAdminToken] = useState(
    localStorage.getItem("adminToken") || ""
  );

  const api = axios.create({
    baseURL: backendUrl,
    headers: { "Content-Type": "application/json" },
  });

  return (
    <AdminContext.Provider
      value={{ backendUrl, api, adminToken, setAdminToken }}
    >
      {children}
    </AdminContext.Provider>
  );
};
