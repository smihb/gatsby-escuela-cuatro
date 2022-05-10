import React from "react";
import styled from "styled-components";

const PCenter = ({children, uLine}) =>{
	return(
		<Sp
			uLine={uLine}
		>
			{children}
		</Sp>
	)
}
const Sp = styled.p`
	text-align: center;
	max-width: 1120px;
	margin: 50px auto;
	font-size: 1.5rem;
	text-decoration: ${props=>props.uLine && 'underline'};

	@media(min-width: 600px){
		font-size: 1.9rem;
	}
`;
export default PCenter;
