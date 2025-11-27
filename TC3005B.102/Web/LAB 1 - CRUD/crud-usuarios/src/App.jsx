import { useState, useEffect } from "react";
import { db } from "./firebase";

import {
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  getDocs,
  doc
} from "firebase/firestore";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAdd = async () => {
    if (!name || !email) {
      alert("Nombre y email son requeridos.");
      return;
    }

    await addDoc(collection(db, "users"), {
      name,
      email,
      phone,
      age
    });

    setName("");
    setEmail("");
    setPhone("");
    setAge("");

    fetchUsers();
  };

  const fetchUsers = async () => {
    const snapshot = await getDocs(collection(db, "users"));
    setUsers(
      snapshot.docs.map((d) => ({
        id: d.id,
        ...d.data()
      }))
    );
  };

  const handleDelete = async (id) => {
    if (!id) return;
    const ok = confirm("¿Eliminar este usuario?");
    if (!ok) return;
    await deleteDoc(doc(db, "users", id));
    fetchUsers();
  };

  const handleEdit = async (id) => {
    const u = users.find((x) => x.id === id);
    if (!u) return;

    const newName = prompt("Nuevo nombre:", u.name ?? "");
    if (newName === null) return;
    const newEmail = prompt("Nuevo email:", u.email ?? "");
    if (newEmail === null) return;
    const newPhone = prompt("Nuevo teléfono:", u.phone ?? "");
    if (newPhone === null) return;
    const newAge = prompt("Nueva edad:", u.age ?? "");
    if (newAge === null) return;

    await updateDoc(doc(db, "users", id), {
      name: newName,
      email: newEmail,
      phone: newPhone,
      age: newAge
    });

    fetchUsers();
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1>Registra un nuevo usuario</h1>

      <div style={{ marginBottom: 20, maxWidth: 420 }}>
        <input
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%", marginBottom: 8, padding: 8 }}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", marginBottom: 8, padding: 8 }}
        />
        <input
          placeholder="Teléfono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{ width: "100%", marginBottom: 8, padding: 8 }}
        />
        <input
          placeholder="Edad"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={{ width: "100%", marginBottom: 8, padding: 8 }}
        />

        <button onClick={handleAdd} style={{ padding: "8px 12px" }}>
          Agregar usuario
        </button>
      </div>

      <ul style={{ padding: 0, listStyle: "none" }}>
        {users.map((u) => (
          <li key={u.id} style={{ marginBottom: 12, border: "1px solid #ddd", padding: 8, borderRadius: 6 }}>
            <div>
              <strong>{u.name}</strong> — {u.email}
            </div>
            <div>{u.phone} — {u.age ? `${u.age} años` : ""}</div>
            <div style={{ marginTop: 8 }}>
              <button onClick={() => handleEdit(u.id)} style={{ marginRight: 8 }}>Editar</button>
              <button onClick={() => handleDelete(u.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

}

export default App;
