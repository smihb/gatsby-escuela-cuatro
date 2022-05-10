import React from 'react';
import styled from 'styled-components';

const Span = ({ children, color, uline}) =>{
    return(
        <SpanStyled
            color={color}
            uline={uline}
        >
            {children}
        </SpanStyled>
    )
}
const SpanStyled = styled.span`
    color: ${props=>props.color};
    text-decoration: ${props=>props.uline && 'underline'};
`;
export default Span