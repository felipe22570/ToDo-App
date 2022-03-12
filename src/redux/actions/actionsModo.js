import { typesTema } from "../types/types";

export const cambiarModo = (modo) => {
   return {
      type: typesTema.tema,
      payload: modo,
   };
};
