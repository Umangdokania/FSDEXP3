import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Navbar from "./Navbar";
import ProtectedRoute from "./ProtectedRoute";

export default function App() {
  const [auth, setAuth] = useState(false);

  return (
    <>
      {auth && <Navbar setAuth={setAuth} />}
      <Routes>
        <Route path="/" element={<Login setAuth={setAuth} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<ForgotPassword />} />

        <Route path="/dashboard" element={
          <ProtectedRoute auth={auth}><Dashboard /></ProtectedRoute>
        } />

        <Route path="/profile" element={
          <ProtectedRoute auth={auth}><Profile /></ProtectedRoute>
        } />
      </Routes>
    </>
  );
}
