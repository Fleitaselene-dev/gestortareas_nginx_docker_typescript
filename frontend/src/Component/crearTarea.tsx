import Button from "./button";

 const handleCrear = () => alert("Crear Tarea");

export default function CrearTarea(){
    return(
        <div>
            <Button label="Crear Tarea" color="pink" onClick={handleCrear}/>
        </div>
    )
}