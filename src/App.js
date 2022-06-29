import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import authFetch from "./axios/custom";

import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import Users from "./pages/Users";
import About from "./pages/About";
import User from "./pages/User";
import Footer from "./components/Footer";

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await authFetch(
        "/?results=20&inc=name,picture,location,dob,registered&noinfo"
      );
      const data = response.data.results;
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users users={users} />} />
          <Route path="users/:name" element={<User users={users} />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
