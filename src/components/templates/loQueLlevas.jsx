import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

import Section from "../atoms/section";
import H2 from "../atoms/h2";
import Span from "../atoms/span";
import PCenter from "../atoms/pCenter";
import ListItem from "../atoms/listItem";
import ImgCont from "../atoms/imgCont";

import { orange } from "../../lib/colors";
import { monto } from "../../lib/functions";

import Button from "../atoms/button";
import { urlButton1 } from "../../lib/url";

const LoQueLlevas = ({ cambio, moneda}) =>{
    return(
        <Section>
            <Container>
                <H2
                    bigText
                    color={orange}
                >
                    Déjame mostrarte todo lo que <Span color={'black'} uline>estas</Span> llevando
                </H2>
                <ImgCont>
                    <StaticImage src={'../../images/llevas.png'} alt="Escuela de Cuatro" />
                </ImgCont>

                <ListItem>
                    Acceso al contenido del Desafío de Cero a Cuatrista 
                    <Span color={'red'}> (Valor: {monto(197, cambio, moneda)})</Span>
                </ListItem>

                <ListItem>
                    Mentoría VIP con Angel Fernandez  y Fernando Rodriguez
                    <Span color={'red'}> (Valor: {monto(50, cambio, moneda)})</Span>
                </ListItem>

                <ListItem>
                    Ebook: La guía rápida del cuatrista principiante
                    <Span color={'red'}> (Valor: {monto(92, cambio, moneda)})</Span>
                </ListItem>

                <ListItem>
                    Guías secretas del cuatrista élite
                    <Span color={'red'}> (Valor: {monto(30, cambio, moneda)})</Span>
                </ListItem>

                <ListItem>
                    Acceso a la Comunidad cuatristas sin límites
                    <Span color={'red'}> (Valor: {monto(78, cambio, moneda)})</Span>
                </ListItem>

                <ListItem>
                    Playlist los Heroes del Cuatro
                    <Span color={'red'}> (Valor: {monto('Incalculable', cambio, moneda)})</Span>
                </ListItem>

                <ListItem>
                    Diploma de cero a cuatrista Al terminar el desafío
                    <Span color={'red'}> (Valor: {monto('Incalculable', cambio, moneda)})</Span>
                </ListItem>

                <ListItem>
                    BONO SECRETO
                    <Span color={'red'}> (Valor: {monto('Incalculable', cambio, moneda)})</Span>
                </ListItem>

                <PCenter>
                    Lleva todo esto ahora
                </PCenter>

                <ImgCont>
                    <StaticImage src={'../../images/promocion.png'} alt="Escuela de Cuatro" />
                </ImgCont>

                <Button
                    url={urlButton1}
                >
                    SI! QUIERO TODO AHORA!
                </Button>

                <PCenter>
                    Esta es una OFERTA ESPECIAL que puede 
                    cerrar en cualquier momento
                </PCenter>
            </Container>
        </Section>
    )
}
const Container = styled.div`
    border: 3px solid black;
    border-radius: 10px;
    max-width: 810px;
    margin: 0 auto;
    padding: 10px;
`;

export default LoQueLlevas;