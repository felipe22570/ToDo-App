import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cambiarModo } from "../redux/actions/actionsModo";
import { NavBar } from "../styles/lightStyles";
import App from "./App";

const Light = () => {
   const dispatch = useDispatch();

   return (
      <div>
         <NavBar>
            <h1>TODO</h1>
            <Link to="/dark" onClick={() => dispatch(cambiarModo("dark"))}>
               <img
                  src="https://res.cloudinary.com/dcane9asx/image/upload/v1646228072/images-sprint3-reto2/icon-moon_w0wxes.svg"
                  alt=""
               />
            </Link>
         </NavBar>
         <App />
      </div>
   );
};

export default Light;
