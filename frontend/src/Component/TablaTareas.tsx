import Button from "./button";
import { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../Services/task";
import type { ITask } from "../types/tareas";

export default function TablaTareas() {
const [tareas, setTareas] = useState<ITask[]>([]);

  const cargarTareas = async () => {
    const data = await getTasks();
    setTareas(data);
  };

  useEffect(() => {
    cargarTareas();
  }, []);

  const handleDelete = async (id) => {
    await deleteTask(id);
    cargarTareas(); // refresca lista
  };

  return (
    <div className="p-6">
      <table className="border-3">
        <thead>
          <tr>
            <th className="border-2 p-1">Tarea</th>
            <th className="border-2 p-1">Descripción</th>
            <th className="border-2 p-1">Estado</th>
            <th className="border-2 p-1">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {tareas.map((t) => (
            <tr key={t.id}>
              <td className="border-2 p-1">{t.title}</td>
              <td className="border-2 p-1">{t.description}</td>
              <td className="border-2 p-1">{t.status ? "Completado" : "Pendiente"}</td>
              <td className="border-2 p-1">
                <Button label="Eliminar" onClick={() => handleDelete(t.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

