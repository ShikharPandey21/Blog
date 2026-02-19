import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
  const checkAuth = async () => {
    try {
      const userData = await authService.getCurrentUser();

      if (userData) {
        dispatch(login(userData));
      } else {
        dispatch(logout());
      }
    } catch (error) {
      console.log("Auth error:", error);
      dispatch(logout());
    } finally {
      setLoading(false);
    }
  };

  checkAuth();
}, [dispatch]);

  return !loading ? (
  <div className="min-h-screen flex flex-col bg-gray-400">
    <Header />
    
    <main className="flex-grow">
      <Outlet />
    </main>
    
    <Footer />
  </div>
) : null;
}

export default App;
