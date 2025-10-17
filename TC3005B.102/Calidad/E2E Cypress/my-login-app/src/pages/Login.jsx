import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const VALID_EMAIL = "test@correcto.com";
  const VALID_PASSWORD = "contrasena123";

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      localStorage.setItem("authToken", "fake-jwt-token-123");
      navigate("/dashboard");
    } else {
      setError("Credenciales inválidas. Revisa email y/o contraseña.");
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#f0f0f0", // Fondo uniforme de toda la pantalla
      }}
    >
      <div
        style={{
          width: 400,
          padding: 40,
          borderRadius: 8,
          backgroundColor: "#fff", // Card del formulario
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "column",
          gap: 15,
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: 20 }}>Iniciar sesión</h2>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: 12 }}
        >
          <label>
            Email
            <input
              data-cy="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: "100%", padding: 8, marginTop: 4 }}
            />
          </label>
          <label>
            Contraseña
            <input
              data-cy="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: "100%", padding: 8, marginTop: 4 }}
            />
          </label>
          <button
            data-cy="submit"
            type="submit"
            style={{ padding: 10, marginTop: 8, cursor: "pointer" }}
          >
            Entrar
          </button>
        </form>

        {error && (
          <div
            data-cy="error"
            role="alert"
            style={{ marginTop: 12, color: "crimson", textAlign: "center" }}
          >
            {error}
          </div>
        )}

        <div style={{ marginTop: 20, fontSize: 12, color: "#666", textAlign: "center" }}>
          Credenciales válidas (para pruebas): <br />
          <strong>test@example.com / password123</strong>
        </div>
      </div>
    </div>
  );
}
