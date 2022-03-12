import styled from "styled-components";

export const Contenedor = styled.div`
   min-height: 100vh;
   background-color: black;
`;

export const NavBar = styled.div`
   height: 40vh;
   background: url("https://res.cloudinary.com/dcane9asx/image/upload/v1646228072/images-sprint3-reto2/bg-desktop-dark_jjithd.jpg");
   height: 30vh;
   display: flex;
   justify-content: center;
   gap: 22%;
   padding-top: 10vh;
   color: white;
   letter-spacing: 0.8rem;

   @media screen and (max-width: 940px) {
      gap: 38%;
   }

   @media screen and (max-width: 520px) {
      gap: 40%;
   }
`;
