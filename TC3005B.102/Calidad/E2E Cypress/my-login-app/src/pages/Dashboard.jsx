import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("authToken");
    navigate("/login");
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#f0f0f0", // Fondo uniforme
        gap: 20,
      }}
    >
      <h1 data-cy="dashboard-title">Bienvenido al Dashboard</h1>
      <p data-cy="dashboard-welcome">Has iniciado sesión correctamente.</p>
      <button
        data-cy="logout"
        onClick={handleLogout}
        style={{ padding: 10, cursor: "pointer" }}
      >
        Cerrar sesión
      </button>
    </div>
  );
}
