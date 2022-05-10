import React from 'react';
import styled from 'styled-components';

const Button = ({children, url = '#'}) => {
    return(
        <ButtonS>
            <A 
                href={url} 
                target={'_blank'}
            >
                {children}
            </A>
        </ButtonS>
    )
}
const ButtonS = styled.div`
    margin: 0 auto;
    text-align: center;
    margin: 50px auto;
`;
const A = styled.a`
    font-size: 1.5rem;
    display: inline-block;
    padding: 20px 30px;
    text-decoration: none;
    color: white;
    font-weight: 700;
    border-radius: 5px;
    background-color:   HSL(128.3, 52.7%, 59.4%);
`;
export default Button;