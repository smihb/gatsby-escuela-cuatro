import React from "react";
import styled from "styled-components"

const P = ({children}) =>{
	return(
		<Sp>{children}</Sp>
	)
}
const Sp = styled.p`
	font-size: 1.6rem;
	margin: 30px auto;
	max-width: 960px;
`;
export default P;
