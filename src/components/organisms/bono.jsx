import React from "react";
import styled from "styled-components";
import { orange } from "../../lib/colors";
import { monto } from "../../lib/functions";
import LeftSection from "../molecules/bonoLeftSection";
import RightSection from "../molecules/bonoRightSection";

const Bono = ({number, img, valor, moneda, cambio, text, cta }) =>{
   
    const Valor = monto(valor, cambio, moneda)

    return(
        <Container>
            <LeftSection
                img={img}
                valor={Valor} 
                number={number}
            />
            <RightSection
                text={text}
                cta={cta}
            />
        </Container>
    )
}
const Container = styled.div`
    padding: 10px;
    margin: 20px auto 70px;
    max-width: 1120px;
    border-radius: 10px;
    border: 3px solid ${orange};

    display: flex;
    flex-wrap: wrap;
    
    @media(min-width: 900px){
        flex-wrap: nowrap;
    }
`;
export default Bono;