import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  function redirectIfNotAuthenticated() {
    const authenticated = localStorage.getItem("isAuthenticated") || null;
    if (!authenticated) {
      navigate("/login");
    }
  }

  useEffect(() => {
    redirectIfNotAuthenticated();
  }, []);

  return children;
}
