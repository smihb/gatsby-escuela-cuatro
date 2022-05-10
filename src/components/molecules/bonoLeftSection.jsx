import React from "react";
import styled from "styled-components";
import { orange } from "../../lib/colors";

const LeftSection = ({number, img, valor}) =>{

    return(
        <Container>
            <Number>BONO # {number}</Number>

            <ImgCont>
                <img src={img} alt="Escuela de Cuatro" />
            </ImgCont>

            <Valor>VALOR: {valor}</Valor>
        </Container>
    )
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    margin: 10px;
`;
const Number = styled.div`
    color: white;
    font-size: 2rem;
    padding: 30px 0;
    text-align: center;
    text-decoration: underline;
    background-color: ${orange};
`;
const ImgCont = styled.div`

    &>img{
        width: 100%;
    }
`;
const Valor = styled.div`
    color: red;
    padding: 30px 0;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    border: 3px solid red;
`;
export default LeftSection;