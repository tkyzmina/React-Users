import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function SharedLayout() {
  return (
    <>
      <div className="wrapper flex flex-col h-screen">
        <NavBar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default SharedLayout;
