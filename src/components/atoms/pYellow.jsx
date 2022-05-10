import React from "react";
import styled from 'styled-components';
import {yellow} from '../../lib/colors'

const PYellow = ({children}) =>{
	return(
		<P>{children}</P>
	)
}
const P = styled.p`
	padding: 10px 2%;
	margin: 40px auto;
	max-width: 1120px;
	font-size: 1.4rem;
	text-align: center;
	background-color: ${yellow}
`;
export default PYellow;
