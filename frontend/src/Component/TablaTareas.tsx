import Button from "./button";
import { useState } from "react";

export default function TablaTareas() {
  const [tareas, setTareas] = useState([
    { id: 1, titulo: "Tarea 1", descripcion: "Revisar reportes", estado: "Pendiente" },
    { id: 2, titulo: "Tarea 2", descripcion: "Enviar correo al cliente", estado: "Completado" },
  ]);
   const handleEdit = () => alert("Editar");
  const handleDDelete = () => alert("Eliminar");

  // const eliminarTarea = (id) => {
  //   setTareas(tareas.filter((t) => t.id !== id));
  // };

  return (
    <div className="p-6">
      <table className="border-3  ">
        <thead className="gap-12 border-2">
          <tr >
            <th className="border-2 p-1">Tarea</th>
            <th className="border-2 p-1">descripcion</th>
             <th className="border-2 p-1">Estado</th>
            <th className="border-2 p-1">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {tareas.map((tarea) => (
            <tr key={tarea.id}>
              <td className="border-2 p-1">{tarea.titulo}</td>
              <td className="border-2 p-1">{tarea.descripcion}</td>
               <td className="border-2 p-1">{tarea.estado}</td>
              <td className="border-2 p-1 gap-4">
   <Button label="Editar" onClick={handleEdit}/>
   <Button label="Eliminar" onClick={handleDDelete}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


