import CrearTarea from "./Component/crearTarea";
import ListarTarea from "./Component/ListarTares";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl p-6">Gestor de tareas</h1>

      <div className="flex gap-12 min-w-3xl">
        <div>
          <ListarTarea />
        </div>

        <div>
          <CrearTarea />
        </div>
      </div>
    </div>
  );
}



export default App
