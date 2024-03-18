import React from "react";
import "./globals.css";
import { Route, Routes } from "react-router-dom";
import SignIn from "./auth/forms/SignIn";
import { Home } from "./root/pages";
import SignUp from "./auth/forms/SignUp";
import AuthLayout from "./auth/forms/AuthLayout";
import RootLayout from "./root/RootLayout";
const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* PUNLIC ROUTES */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>

        {/* PRIVSTE ROUTES */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
