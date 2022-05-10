import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

import ImgCont from "../atoms/imgCont";

const ArtistImg = () =>{
    const width = 520;
    return(
        <>
            <ImgCont>
                <StaticImage 
                    width={width}
                    alt="Escuela Cuatro" 
                    src={'../../images/artist1.jpg'} 
                />
            </ImgCont>
            <P>Show con los maestros Miguel Delgado Estévez y Claudio Nazoa</P>

            <ImgCont>
                <StaticImage 
                    width={width}
                    alt="Escuela Cuatro" 
                    src={'../../images/artist2.jpg'} 
                />
            </ImgCont>
            <P>Show acompañando a Valentina Quintero y Miguel Delgado Estévez (Cuentos de Caminos)</P>

            <ImgCont>
                <StaticImage 
                    width={width}
                    alt="Escuela Cuatro" 
                    src={'../../images/artist3.jpg'} 
                />
            </ImgCont>
            <P>Show con Eduardo Rodriguez Giolitti, Miguel Delgado Estévez, Claudia Delgado y Mariana Delgado</P>

            <ImgCont>
                <StaticImage 
                    width={width}
                    alt="Escuela Cuatro" 
                    src={'../../images/artist4.jpg'} 
                />
            </ImgCont>
            <P>Show con Ilan Chester y Miguel Delgado Estévez</P>

            <ImgCont>
                <StaticImage 
                    width={width}
                    alt="Escuela Cuatro" 
                    src={'../../images/artist5.jpg'} 
                />
            </ImgCont>
            <P>Ensayo con El Cuarteto</P>

            <ImgCont>
                <StaticImage 
                    width={width}
                    alt="Escuela Cuatro" 
                    src={'../../images/artist6.jpg'} 
                />
            </ImgCont>
            <P>Backstage con el Pollo Brito, Hecto Molina y Jorge Glem</P>

            <ImgCont>
                <StaticImage 
                    width={width}
                    alt="Escuela Cuatro" 
                    src={'../../images/artist7.jpg'} 
                />
            </ImgCont>
            <P>Videoclipe con Luis Fernando Borjas</P>

            <ImgCont>
                <StaticImage 
                    width={width}
                    alt="Escuela Cuatro" 
                    src={'../../images/artist8.jpg'} 
                />
            </ImgCont>
            <P>Ensayo con Luis Olavarrieta</P>

            <ImgCont>
                <StaticImage 
                    width={width}
                    alt="Escuela Cuatro" 
                    src={'../../images/artist9.jpg'} 
                />
            </ImgCont>
            <P>Entrevista con Mariela Celis y Nelson Bocaranda</P>

            <ImgCont>
                <StaticImage 
                    width={width}
                    alt="Escuela Cuatro" 
                    src={'../../images/artist10.jpg'} 
                />
            </ImgCont>
            <P>Concierto con Solo Ensamble</P>
        </>
    )   
}
const P = styled.p`
    text-align: center;
    margin: 10px auto 40px;
    font-size: 1.2rem;
`;
export default ArtistImg;