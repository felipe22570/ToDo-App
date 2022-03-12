import { typesTarea } from "../types/types";

export const AgregarTarea = (tarea) => {
   return {
      type: typesTarea.agregar,
      payload: tarea,
   };
};

export const EditarTarea = (tarea) => {
   return {
      type: typesTarea.editar,
      payload: tarea,
   };
};

export const eliminarTarea = (id) => {
   return {
      type: typesTarea.eliminar,
      payload: id,
   };
};

export const eliminarCompletados = (tarea) => {
   return {
      type: typesTarea.eliminarCompletados,
      payload: tarea,
   };
};

export const listarTareas = (tareas) => {
   return {
      type: typesTarea.list,
      payload: tareas,
   };
};
