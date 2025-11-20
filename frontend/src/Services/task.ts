const URI = "http://localhost:3000/api/tasks";

export const getTasks = async () => {
  const res = await fetch(URI);
  if (!res.ok) throw new Error("Error al obtener tareas");
  return res.json();
};

export const createTask = async (task) => {
  const res = await fetch(URI, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  if (!res.ok) throw new Error("Error al crear tarea");
  return res.json();
};

export const deleteTask = async (id) => {
  const res = await fetch(`${URI}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Error al eliminar tarea");
  return res.json();
};

