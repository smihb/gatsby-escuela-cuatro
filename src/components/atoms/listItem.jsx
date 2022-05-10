import React from "react";
import styled from "styled-components";
import icon from "../../images/vistobueno.svg"
const ListItem = ({children}) =>{
	return(
		<P>
			<img src={icon} alt='check'/>
			{children}
		</P>	
	)
}
const P = styled.p`
	font-size: 1.6rem;
	margin: 30px auto;
	max-width: 960px;

	&>img{
	width: 25px;
	margin-right: 10px;
	display: inline-block;
	transform: translateY(2px);
	}
`;
export default ListItem;
