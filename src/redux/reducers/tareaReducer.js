import { typesTarea } from "../types/types";

const initialState = {
   tareas: [],
   activos: [],
   inactivos: [],
};

export const tareaReducer = (state = initialState, action) => {
   switch (action.type) {
      case typesTarea.agregar:
         return {
            tareas: [...state.tareas, action.payload],
         };

      case typesTarea.mostrar:
         return {
            tareas: [...action.payload],
         };

      case typesTarea.editar:
         let tareaEditada = state.tareas.map((ed) =>
            ed.id === action.payload.id ? action.payload : ed
         );

         return {
            tareas: tareaEditada,
         };

      case typesTarea.eliminar:
         let nuevasTareas = state.tareas.filter((u) => u.id !== action.payload);

         return {
            tareas: nuevasTareas,
         };

      case typesTarea.eliminarCompletados:
         let tareasRestantes = state.tareas.filter((u) => u.done === "false");

         return {
            tareas: tareasRestantes,
         };
      default:
         return state;
   }
};
