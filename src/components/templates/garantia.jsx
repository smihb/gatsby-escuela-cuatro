import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

import Section from "../atoms/section";
import H2 from "../atoms/h2";
import PCenter from "../atoms/pCenter";
import P from "../atoms/p";
import ImgCont from "../atoms/imgCont";

import {orange} from "../../lib/colors"

const Garantia = () =>{
    return(
        <Section>
            <Container>
                <H2
                    color={orange}
                >
                    Tienes GARANTÍA incondicional de 7 días
                </H2>
                <H2>
                    La oportunidad de Oro para aprender
                </H2>

                <ImgCont>
                    <StaticImage src={'../../images/garantia.png'} alt="Escuela de Cuatro" />
                </ImgCont>

                <PCenter>
                    <b>Aún si pides el dinero de vuelta te dejo 
                        quedar con los bonos</b>
                </PCenter>
                
                <P>
                    Pero Ángel, la gente lo hará solo 
                    para quedarse con los bonos?
                </P>
                <P>
                    Si, siempre habrán personas que se aprovecharan de eso…
                </P>
                <P>
                    Sin embargo esta garantía te asegura que lo que 
                    estoy hablando es real, entonces a pesar de que 
                    corra ese riesgo, estoy dejando el máximo para 
                    que puedas experimentar el cambio que el contenido 
                    te ofrece.
                </P>
                <P>
                    Si realmente no te funciona, te devuelvo tu dinero y 
                    dejo que te quedes con el libro y los bonos.
                </P>
                <P>
                    Osea que si te gusta tienes todo el contenido y 
                    sales ganando. Y si no, igual te quedas con los 
                    bonos te devolvemos el dinero y de nuevo sales 
                    ganando.
                </P>
                <P>
                    Para ti solo son ventajas por donde lo veas.
                </P>

            </Container>
        </Section>
    )
}
const Container = styled.div`
    max-width: 960px;
    margin: 50px auto;
    padding: 20px;
    background-color: lightgray;
`;
export default Garantia;