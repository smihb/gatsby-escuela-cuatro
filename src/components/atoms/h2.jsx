import React from "react";
import styled from "styled-components";

const H2 = ({children, uline, upCase, fSize='2.5rem', bigText, color='black'}) =>{
	return(
		<Sh2
			bigText={bigText}
			upCase={upCase}
			fSize={fSize}
			color={color}
			uline={uline}
		>
			{children}
		</Sh2>
	)
}
const Sh2 = styled.h2`
	line-height: ${props=>props.bigText ? '': '25px'};
	text-align: center;
	max-width: 960px;
	margin: 60px auto;
	color: ${props=>props.color};
	text-transform: ${props=>props.upCase && 'uppercase'};
	text-decoration: ${props=>props.uline && 'underline'};
	font-size: ${props=>props.bigText && '2.5rem'};

	@media(min-width: 600px){
		line-height: 45px;	
		font-size: ${props=>props.fSize};
	}
`;
export default H2;
