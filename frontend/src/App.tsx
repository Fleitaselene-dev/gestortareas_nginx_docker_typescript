import CrearTarea from './Component/crearTarea';
import ListarTarea from './Component/ListarTares';

function App() {
  return (
      <div className='flex flex-col justify-center items-center'>
      <h1 className='text-2xl p-6 '>Gestor de tarea</h1>
      <div className='flex gap-12  h-full min-w-3xl'>
       <div className=' w-2xl'>
        <ListarTarea/>
        </div>
       <div className=''>
       <CrearTarea/>
       </div>
      </div>
      
      </div>
  )
}

export default App
