import React from "react";
import styled from "styled-components";

const Section = ({children}) =>{
    return(
        <SectionS>
            {children}
        </SectionS>
    )
}
const SectionS = styled.section`
    padding: 0 2%;
`;
export default Section;