import React from "react";
import styled from "styled-components";

const ImgCont = ({children}) =>{
    return(
        <Div>
            {children}
        </Div>
    )
}
const Div = styled.div`
    display: flex;
    justify-content: center;
`;
export default ImgCont;