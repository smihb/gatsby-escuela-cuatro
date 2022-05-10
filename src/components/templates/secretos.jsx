import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Section from '../atoms/section';
import ImgCont from '../atoms/imgCont';
import H2 from '../atoms/h2';
import P from '../atoms/p';
import { orange } from '../../lib/colors';
import Span from '../atoms/span';
import Lists from '../organisms/lists';

const Secretos = () => {
    return(
        <Section>
            <H2>Mira los secretos que aprenderás</H2>
            
            <ImgCont>
                <StaticImage src={'../../images/mock3.png'} alt="Escuela de Cuatro" />
            </ImgCont>

            <P>
                <b>Secreto 1️⃣ </b>técnica especial para soltar la mano derecha.
            </P>
            <P>
                <b>Secreto 2️⃣ </b>como tocar todos los acordes con solo 4 formas.
            </P>
            <P>
                <b>Secreto 3️⃣ </b>Secretos que hacen que la música suene bien.
            </P>
            <P>
                <b>Secreto 4️⃣ </b>Método para acompañar acordes a primera vista.
            </P>
            <P>
                <b>Secreto 5️⃣ </b>Afinar el Cuatro sin un afinador.
            </P>
            <P>
                <b>Secreto 6️⃣ </b>Como destrabar tu mano derecha y lograr una agilidad sobrenatural.
            </P>
            <P>
                <b>Secreto 7️⃣ </b>Como acompañar cualquier canción del repertorio Venezolano
            </P>
            <P>
                <b>Secreto 8️⃣ </b>Descubrirás la fórmula infalible de los 7 acordes infinitos
            </P>
            <P>
                <b>Secreto 9️⃣ </b>Aplicarás la técnica para acompañar los generos 
                más populares del repertorio internacional: Desde bolero, salsa… 
                hasta pop, rock, jazz, música brasileña y mucho más.
            </P>
            <P>
                <b>Secreto 🔟 </b>No tener cuatro en el momento no será un 
                problema, Descubrirás como alguien sin importar el sitio 
                geográfico donde se encuentre puede imitar la ejecución 
                del cuatro con un Ukelele
            </P>

            <H2>
                Y TAMBIÉN…
            </H2>

            <P>
                ✔️ Cómo obtener el sonido perfecto del Cuatro.
            </P>
            <P>
                ✔️ Por qué puede ser un error tocar sin la técnica correcta.
            </P>
            <P>
                ✔️ Identifica tus problemas al tocar para superarlos.
            </P>
            <P>
                ✔️ Qué es lo único que necesitas para no abandonar la música.
            </P>
            <P>
                ✔️ El tipo de canciones que debes aprender al comenzar.
            </P>
            <P>
                ✔️ Cómo lograr retener todas las canciones y acordes que aprendes sin olvidarlas.
            </P>
            <P>
                ✔️ Como afinar tu oido.
            </P>
            <P>
                ✔️ Y mucho, mucho más.
            </P>

            <H2>
                LO QUE LAS PERSONAS DICEN SOBRE MI MÉTODO PARA 
                <Span
                color={orange}
                > APRENDER A TOCAR EL CUATRO VENEZOLANO
                </Span>
            </H2>
            {/* 				
            ***********************************
            ***** aqui van los videos *********
            *********************************** 
            */}

            <P>
                <i>"Angel Fernandez que es un cuatrista maravilloso" </i>
                -<b> Ana Maria Simón</b>
            </P>

            <P>
                <i>"Si quieres que el Cuatro sea un compañero de vida, conoce el método de Angel Fernandez" </i>
                -<b>Miguel Delgado Estévez</b>
            </P>

            {/* 				
            ***********************************
            ***** por aca van 3 imagenes ******
            *********************************** 
            */}
            <ImgCont>
                <StaticImage src={'../../images/prueba1.png'} alt="Escuela de Cuatro" />
            </ImgCont>
            <ImgCont>
                <StaticImage src={'../../images/prueba2.png'} alt="Escuela de Cuatro" />
            </ImgCont>
            <ImgCont>
                <StaticImage src={'../../images/prueba3.png'} alt="Escuela de Cuatro" />
            </ImgCont>
            
            <H2>
                Como puedes ver el método del desafío de cero a cuatrista 
                está enseñando a centenas de personas a tocar con facilidad 
                esas canciones que aman.
            </H2>
            <H2
                color={orange}
            >
                Mi pregunta es: ¿La próxima persona serás tú?
            </H2>

            <ImgCont>
                <StaticImage src={'../../images/angel.jpg'} alt="Escuela de Cuatro" />
            </ImgCont>

            <H2>
                Si realmente quieres aprender a tocar cuatro, esta mentoría 
                funciona para que lo hagas en el menor tiempo posible.
            </H2>

            <ImgCont>
                <StaticImage src={'../../images/mock4.jpg'} alt="Escuela de Cuatro" />
            </ImgCont>

            <Lists/>

        </Section>
    )
}
export default Secretos;