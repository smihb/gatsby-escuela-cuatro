import React from "react";
import styled from "styled-components";
import {orange} from "../../lib/colors"

const Header = () =>{
	return(
		<SHeader>
			Para quien busca aprender a tocar 
			sus canciones preferidas 
			<br/>
			en el cuatro Venezolano 
			incluso iniciando de cero en conocimiento musical
		</SHeader>
	)
}
const SHeader = styled.header`
	color: white;
	font-weight: 700;
	line-height: 35px;
	font-size: 1.5rem;
	padding: 30px 2%;
	text-align: center;
	background-color: ${orange};
`;
export default Header;
