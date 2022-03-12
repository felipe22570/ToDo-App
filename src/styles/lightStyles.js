import styled from "styled-components";

export const Contenedor = styled.div``;

export const NavBar = styled.div`
   background: url("https://res.cloudinary.com/dcane9asx/image/upload/v1646228072/images-sprint3-reto2/bg-desktop-light_evva5s.jpg");
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
