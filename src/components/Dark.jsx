import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cambiarModo } from "../redux/actions/actionsModo";
import { Contenedor, NavBar } from "../styles/darkStyles";
import App from "./App";

const Dark = () => {
   const dispatch = useDispatch();

   return (
      <Contenedor>
         <NavBar>
            <h1>TODO</h1>
            <Link to="/" onClick={() => dispatch(cambiarModo("light"))}>
               <img
                  src="https://res.cloudinary.com/dcane9asx/image/upload/v1646228072/images-sprint3-reto2/icon-sun_z1mmwa.svg"
                  alt=""
               />
            </Link>
         </NavBar>
         <App />
      </Contenedor>
   );
};

export default Dark;
