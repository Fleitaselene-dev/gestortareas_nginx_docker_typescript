import Button from "./button";
import { useState } from "react";
import { createTask } from "../Services/task";

export default function CrearTarea() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCrear = async () => {
    if (!title || !description) {
      alert("Completa todos los campos");
      return;
    }

    await createTask({ title, description, status: false });

    alert("Tarea creada!");
    setTitle("");
    setDescription("");
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2"
      />

      <textarea
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2"
      />

      <Button label="Crear Tarea" color="pink" onClick={handleCrear} />
    </div>
  );
}
