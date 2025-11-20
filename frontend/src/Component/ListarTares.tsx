import { useState } from "react"
import TablaTareas from "./TablaTareas";

export default function ListarTarea(){
    const [isChecked, setChecked] = useState(false)

    return(
        <div>
            <label>
              <input 
                type="checkbox"
                checked={isChecked}
                onChange={(e)=> setChecked(e.target.checked)} 
              />
              Listar tareas
            </label>

            {isChecked && <TablaTareas />}
        </div>
    )
}
