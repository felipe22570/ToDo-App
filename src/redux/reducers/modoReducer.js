import { typesTema } from "../types/types";

const initialState = {
   tema: "light",
};

export const modoReducer = (state = initialState, action) => {
   switch (action.type) {
      case typesTema.tema:
         return {
            tema: action.payload,
         };

      default:
         return state;
   }
};
