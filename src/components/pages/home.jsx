import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Header from '../atoms/header.jsx';
import Main from '../templates/main.jsx';
import Crisis from '../templates/crisis.jsx';
import Secretos from '../templates/secretos.jsx';
import Bonos from '../templates/bonos.jsx';
import LoQueLlevas from '../templates/loQueLlevas.jsx';
import Garantia from '../templates/garantia.jsx';
import Objeciones from '../templates/objeciones.jsx';

const Home = ({ cambio, moneda}) => {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Main />
			<Crisis />
			<Secretos />
			
			<Bonos 
				cambio={cambio}
				moneda={moneda}
			/>

			<LoQueLlevas
				cambio={cambio}
				moneda={moneda}
			/>
			<Garantia/>
			<Objeciones
				cambio={cambio}
				moneda={moneda}
			/>
		</>
	)
}
const GlobalStyle = createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	body{
		margin: 0;
		padding: 0;
		letter-spacing: -1px;
		font-family: arial, sans-serif;
	}
`;
export default Home;
