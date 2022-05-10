import React from "react";
import styled from "styled-components";
import { orange } from "../../lib/colors";
import H2 from "../atoms/h2";
import P from "../atoms/p";

const RightSection = ({ text, cta }) =>{
    return(
        <Container>
            <H2
                uline
                bigText
                color={orange}
            >
                {text.title && text.title}
            </H2>
            {text.text && Array.isArray(text.text) && text.text.map((item, index)=>{
                return(
                    <P key={index}>{item}</P>
                )
            })}
            {cta && <CTA>
                Recibe esto gratis al garantizar tu inscripción hoy
            </CTA>}

        </Container>
    )
}
const Container = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const CTA = styled.div`
    font-size: 27px;
    font-weight: 700;
    text-transform: uppercase;
    color: white;
    text-align: center;
    padding: 30px 20px;
    background-color: #2B2B2B;
`;
export default RightSection;