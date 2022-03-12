import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
   AgregarTarea,
   EditarTarea,
   eliminarCompletados,
   eliminarTarea,
} from "../redux/actions/ActionsProducto";
import { v1 as uuidv1 } from "uuid";
import "../styles/appStyles/app.css";
import { Checkbox } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const App = () => {
   const dispatch = useDispatch();

   const { tareas } = useSelector((store) => store.tareas);
   const { tema } = useSelector((store) => store.tema);

   const initialState = {
      id: uuidv1(),
      tarea: "",
      done: "false",
   };

   const [objeto, setObjeto] = useState("");

   const elementos = tareas.filter((tarea) => tarea.done.includes(objeto));
   const numActivos = tareas.filter((tarea) => tarea.done.includes("false")).length;

   const [nuevaTarea, setNuevaTarea] = useState(initialState);

   const { tarea } = nuevaTarea;

   const handleOnchange = ({ target }) => {
      setNuevaTarea({
         ...nuevaTarea,
         [target.name]: target.value,
      });
   };

   const reset = () => {
      setNuevaTarea(initialState);
   };

   const addTarea = (nueva) => {
      dispatch(AgregarTarea(nueva));
   };

   const disparar = (e) => {
      e.preventDefault();
      addTarea(nuevaTarea);
      reset();
   };

   const eliminar = (id) => {
      dispatch(eliminarTarea(id));
   };

   const onChecked = (id) => {
      const nuevaTarea = id;

      if (nuevaTarea.done === "false") {
         nuevaTarea.done = "true";
      } else {
         nuevaTarea.done = "false";
      }

      dispatch(EditarTarea(nuevaTarea));
   };

   return (
      <div className="app">
         <form onSubmit={disparar}>
            <input
               className={"input-" + tema}
               type="text"
               name="tarea"
               value={tarea}
               onChange={handleOnchange}
            />
         </form>
         <br />
         <div>
            {elementos.map((element, index) => (
               <>
                  <div key={index} className={tema}>
                     <div className={tema + "-div"}>
                        <Checkbox
                           sx={{
                              color: "hsl(236, 33%, 92%)",
                              "&.Mui-checked": {
                                 color: "hsl(192, 100%, 67%)",
                              },
                           }}
                           onChange={() => onChecked(element)}
                           inputProps={{ "aria-label": "controlled" }}
                        />

                        <span className={element.done + "-" + tema}>{element.tarea}</span>
                     </div>
                     <button
                        className={element.done + "-" + tema}
                        onClick={() => eliminar(element.id)}
                     >
                        <CloseIcon />
                     </button>
                  </div>
               </>
            ))}
            <div className={"foot-" + tema}>
               <span>{numActivos} items left</span>
               <div className={"foot__options__" + tema}>
                  <span onClick={() => setObjeto("")}>All</span>
                  <span onClick={() => setObjeto("false")}>Active</span>
                  <span onClick={() => setObjeto("true")}>Complete</span>
               </div>
               <span onClick={() => dispatch(eliminarCompletados(tarea))}>Clear completed</span>
            </div>
         </div>
      </div>
   );
};

export default App;
