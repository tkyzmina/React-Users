import React, { useState, useEffect } from "react";

import axios from "axios";
import authFetch from "./axios/custom";

function App() {
  const [users, setUsers] = useState({});

  const fetchUsers = async () => {
    try {
      const response = await authFetch("/?results=30&inc=name,picture,location,dob,registered&noinfo");
      const data = response.data.results;
      setUsers(data);      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return <div>App</div>;
}

export default App;
