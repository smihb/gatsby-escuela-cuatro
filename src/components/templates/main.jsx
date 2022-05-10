import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

import H2 from "../atoms/h2";
import ImgCont from "../atoms/imgCont";
import ListItem from "../atoms/listItem";
import P from "../atoms/p";
import PCenter from "../atoms/pCenter";
import PYellow from "../atoms/pYellow";
import { orange } from "../../lib/colors";

const Main = () =>{
    return(
        <MainS>
				<h1>
					<PYellow>
						¿Siempre has querido tocar el cuatro venezolano,
						pero no conoces el camino correcto?
					</PYellow>
				</h1>
				<H2>Descubre: Lo que nunca te contaron sobre </H2>
				<PCenter>
					Como lograr tocar todas tus canciones favoritas en el cuatro,
					Destrabar la agilidad de tus manos y afinar tu oído.
				</PCenter>

				<H2
					fSize={"1.8rem"}
				>
					ESTA OPORTUNIDAD ES PERFECTA PARA TI QUE SIEMPRE:
				</H2>

				<ListItem>
					Soñaste con tocar el cuatro venezolano…
				</ListItem>
				<ListItem>
					Estás totalmente de cero en conocimiento sobre el cuatro
					y hasta tienes poco tiempo para practicar.
				</ListItem>
				<ListItem>
					Ya sabes tocar y quieres ir al próximo nivel.
				</ListItem>
				<ListItem>
					Quieres descubrir la pasión que te hará reencontrarte
					con tus mejores momentos en Venezuela.
				</ListItem>

				<H2
					color={orange}
					fSize={'2rem'}
				>
					¿HAS INTENTADO CUMPLIR ESE SUEÑO, PERO SIEMPRE
					QUE LO INTENTAS NO LO CONSIGUES?
				</H2>

				<H2
					uline
					fSize={'2rem'}
				>
					¡LO HAS ESTADO HACIENDO MAL!
				</H2>

				<P>
					¿Esto te pasa?…
				</P>
				<ListItem>
					Crees que no tener cuatro es un impedimento
					para aprender a tocar el Cuatro
				</ListItem>
				<ListItem>
					Piensas que ya “pasó tu edad” para aprender
					a tocar cuatro.
				</ListItem>
				<ListItem>
					Tienes problemas para relajar la mano derecha.
				</ListItem>
				<ListItem>
					Siempre que aprendes un acorde nuevo olvidas los anteriores.
				</ListItem>
				<ListItem>
					Para ti es imposible o muy difícil dar el golpe
					fuerte en el cuatro manteniendo el ritmo.
				</ListItem>
				<ListItem>
					No sabes como leer los acordes.
				</ListItem>

				<PCenter>
					¿Alguno de estos puntos ha sido el causante de que
					te rindieras o que simplemente no lo intentaras?
				</PCenter>

				<PYellow>
					<b>Entonces ya es hora de que descubras la verdad </b>
					que los grandes expertos usan…
				</PYellow>

				<H2
					uline
					color={orange}
					fSize={'2rem'}
				>
					DESCUBRIMOS LA MEJOR FORMA DE ENSEÑARTE
				</H2>

				<H2
					fSize={'2rem'}
				>
					El secreto para acompañar de forma fluida
					cualquier canción, a oido, con cifrado musical
					y en cualquier tono.
				</H2>

				<P>
					Mi nombre es <b>Angel Fernandez </b>
					hace algunos años era como tu, 
					<b> en el 2002 comencé a aprender por mi cuenta</b>, 
					al principio tuve muchas dificultades pero insistí 
					hasta que comencé a tener más confianza tocando.
				</P>
				<P>
					Sin embargo en una época difícil,  hubo un momento 
					en el que no lograba avanzar, me sentía estancado 
					y estuve a punto de dejarlo todo.
				</P>
				<P>
					Abandonar tus sueños te deja un sabor amargo y 
					Yo, no quería vivir con esa sensación.
				</P>
				<ImgCont>
					<StaticImage 
						alt="Angel Fernndez" 
						src={'../../images/mainImg1.jpg'}
					/>
				</ImgCont>

				<P>
					En ese momento me di cuenta de que si quería continuar, 
					<b> debía cambiar mi método de aprendizaje </b> 
					porque el problema no era lo que estaba aprendiendo, 
					sino cómo lo estaba aprendiendo.
				</P>
				<ImgCont>
					<StaticImage 
						src={'../../images/mainImg2.jpg'} 
						alt="Angel Fernndez" 
					/>
				</ImgCont>
			</MainS>
    )
}
const MainS = styled.main`
	padding: 0 2%;
`;
export default Main;