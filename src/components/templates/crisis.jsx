import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import ArtistImg from "../organisms/artistImg";
import H2 from "../atoms/h2";
import ImgCont from "../atoms/imgCont";
import ListItem from "../atoms/listItem";
import P from "../atoms/p";
import PCenter from "../atoms/pCenter";
import PYellow from "../atoms/pYellow";
import Section from "../atoms/section";
import Span from "../atoms/span";

import { orange } from "../../lib/colors";

const Crisis = () =>{
    return(
        <Section>
            <H2>
                Esa crisis comenzó después de que pensé que la única 
                forma de aprender tantas <Span color={orange} >canciones era “memorizando todo”</Span>
            </H2>

            <PCenter
                uLine
            >
                Que solo debia <b>memorizar</b> las miles de combinaciones 
                de acordes y las miles de canciones
            </PCenter>

            <P>
                Entre nosotros, <b>esa no es la mejor forma de aprender</b>.
            </P>
            <P>
                <b>Yo no soy el único que ha estado en esa situación</b>, 
                cada vez me llegan casos similares de personas que 
                quieren comenzar en este mundo pero se encuentran 
                con esta misma pared que es muy difícil de saltar 
                si no tienes la orientación adecuada.
            </P>

            <PYellow>
                <b>Hasta que vi el método que usaban los grandes maestros</b>
            </PYellow>

            <ImgCont>
                <StaticImage 
                    src={'../../images/smartMock.jpg'} 
                    alt="Escuela Cuatro" />
            </ImgCont>

            <PYellow>
                <b>Solo 7 acordes</b> son suficiente para tocar mas de 900 canciones
            </PYellow>

            <P>
                <Span uline>No tiene que ver con la cantidad de acordes que existan</Span>, 
                ni con cuantos posea una canción, 
                <b> sino en la forma en que ves los acordes y la música en general</b>.
            </P>

            <H2
                uline
                upCase
                color={orange}
            >
                ¡Ellos estaban simplificando la fórmula!
            </H2>

            <P>
                Todo lo que utilizaban era una pequeña fórmula que sirve para 
                <b> absolutamente cualquier canción que quisieras tocar</b>.
            </P>
            <P>
                Una canción tras otra todas utilizaban los mismos 
                7 acordes sin importar en qué tono estuviese.
            </P>

            <PYellow>
                El problema es que esto no se enseña desde el principio
            </PYellow>

            <P>
                Pero, si una vez que dominas todo lo básico comienzas 
                a aplicar esta formula, no pasarás por todo el sufrimiento 
                por el cual han pasado el 95% de los músicos, 
                <b> “desaprender malos hábitos para poder adquirir los buenos”</b>
            </P>
            <P>
                Una vez lo dominé, mi mente expandió las posibilidades.
            </P>

            <H2>
                Era obvio que lo que estaba haciendo antes 
                (Y que seguramente tu también puedes estar haciendo) no funcionaba.
            </H2>

            <P>
                La música es en parte técnica que con la orientación correcta 
                y algo de práctica puedes dominar mucho mas rápido de lo que crees.
            </P>
            <P>
                Pero donde verdaderamente se disfruta es cuando puedes acompañar 
                cualquier música “Aunque nunca la hayas escuchado”
            </P>

            <H2>
                ¿Cómo puede ser esto posible?
            </H2>

            <P>
                <b>Luego de haber pasado años tocando todo tipo de música </b>
                logré descubrir que desde un Joropo llanero hasta la última 
                canción POP de Moda, musicalmente no hay mucha diferencia.
            </P>
            <P>
                Esa forma de ver la música es la que me permite igual que 
                a mi compañero <b>Fernando Rodriguez</b> tener el privilegio 
                de presentarnos con <b>grandes artistas</b>.
            </P>
            <P>
                Y eso es <b>¡Increíble!</b>
            </P>


            <ArtistImg />


            <P>
                Después de haber pasado por un largo camino en el que tuve que 
                averiguar con práctica y error lo que realmente funciona. 
            </P>
            <P>
                Decidí enseñar los secretos para que por fin logres dominar 
                tus primeros acordes y ritmos Venezolanos, además de conseguir 
                fluidez al tocar con el método del 
                <b> <Span uline>Desafío de Cero a cuatrista</Span> que va a facilitarte todo</b>.
            </P>

            <ImgCont>
                <StaticImage 
                    src={'../../images/mock2.png'} 
                    alt="Escuela Cuatro" />
            </ImgCont>

            <P>
                <Span uline>En el método digital El Desafío de Cero a Cuatrista </Span> 
                te voy a enseñar todos los secretos que solo cuentan en algunas universidades de música.
            </P>

            <PYellow>
                <b>Ahora podrás disfrutar tocando todo el repertorio Venezolano 
                optimizando tu tiempo de aprendizaje.</b>
            </PYellow>

            <ListItem>
                <b>Con el desafío de Cero a Cuatrista </b>
                No perderás más el tiempo en ejercicios que no son aptos para tus habilidades.
            </ListItem>
            <ListItem>
                <b>Con el desafío de Cero a Cuatrista </b>
                No tendrás más dudas sobre qué es lo siguiente que debes apender.
            </ListItem>
            <ListItem>
                <b>Con el desafío de Cero a Cuatrista </b>
                Tienes todo lo que necesitas aprender en 1 solo sitio a tu alcance.
            </ListItem>
            <ListItem>
                <b>Con el desafío de Cero a Cuatrista </b>
                Es más fácil y rápido llegar al punto en que puedas tocar cualquier canción.
            </ListItem>
            
        </Section>
    )
}
export default Crisis;