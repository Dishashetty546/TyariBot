import React, { createContext, useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';
import { apiPath } from '../utils/apiPath';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const response = await axiosInstance.get(apiPath.getAllProfiles);
      setUser(response.data.user || response.data[0]);
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateUser = (userData) => {
    setUser(userData);
    localStorage.setItem("token", userData.token);
  };

  const clearUser = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading, updateUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
