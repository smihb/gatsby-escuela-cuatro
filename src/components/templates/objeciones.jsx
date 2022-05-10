import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

import Section from "../atoms/section";
import P from "../atoms/p";
import PYellow from "../atoms/pYellow";
import Span from "../atoms/span";
import PCenter from "../atoms/pCenter";
import H2 from "../atoms/h2";
import ImgCont from "../atoms/imgCont";
import Button from "../atoms/button";

import { orange } from "../../lib/colors";
import { monto } from "../../lib/functions";
import { urlButton2, urlButton3, urlButton4 } from "../../lib/url";

const Objeciones = ({ cambio, moneda}) =>{
    return(
        <Section>
            <br />
            <P>
                <b>Aja! y por qué tan barato, donde está la trampa?</b>
            </P>
            <br />
            <P>
                No hay trampas… Es simple.
            </P>
            <P>
                <b>Primero</b>,  porque yo realmente quiero que que puedas 
                tocar y sientas todo lo que transmite el cuatro.
            </P>
            <P>
                Quiero que veas que realmente me importa tu aprendizaje 
                <b> y no quiero que pases por todas las dificultades 
                    por las que yo pasé en su tiempo.</b>
            </P>
            <P>
                <b>Y segundo</b>, porque tal  vez así, con esta primera 
                experiencia podrás confiar en mi para continuar 
                juntos aprendiendo cada vez mas y más.
            </P>

            <br />

            <PYellow>
                <b>Y será que es bueno?  por ser tan barato!</b>
            </PYellow>

            <br />

            <P>
                <b>Esa frase puede tener sentido para algunas cosas en 
                    la vida, pero no para este método.</b>
            </P>
            <P>
                Para tener acceso al contenido que te voy a dar, 
                tendrías que pagar miles de dólares a lo largo de 
                mucho tiempo para obtener los mismo resultados.
            </P>
            <P>
                <b>y vas a tener acceso a todo esto por tontos {monto(47, cambio, moneda)} </b> 
                Después me vas a querer agradecer…
            </P>

            <br />

            <P>
                <Span uline>Para algunos se trata de un hobbie</Span>
            </P>
            <P>
                <Span uline>para otros se trata de cumplir un sueño</Span>
            </P>
            <P>
                <Span uline>otros tal vez quieren darle un regalo a un ser amado</Span>
            </P>
            <P>
                <Span uline>Algunos verán esta oportunidad como un reencuentro con su venezolanidad</Span>
            </P>
            <P>
                Todo esto también depende  de el nivel de compromiso que tenga la persona.
            </P>
            <P>
                <b>Y el hecho es el siguiente; todo esto vale más que {monto(47, cambio, moneda)} ¿no es así?</b>
            </P>
            <P>
                <b>Entonces realmente no hay ninguna razón para que no hagas parte ahora mismo del Desafío de Cero a Cuatrista</b>
            </P>

            <br />

            <PYellow>
                No es una decisión difícil de tomar, en una semana puedes gastar mas de {monto(47, cambio, moneda)} en cualquier cosa sin 
                pensarlo 2 veces y que además no te va a durar toda la vida.
            </PYellow>

            <br />

            <P>
                Solo piensa como será cuando puedas tocar todos las canciones que quieras y pasar 
                reuniones tocando y cantando con tus familiares y amigos.
            </P>
            <P>
                y cuando quieras el reconocimiento de los demás por tu talento solo necesitarás tocar un poco.
            </P>
            <P>
                Y dejar que la música haga todo por ti, realmente es increíble.
            </P>
            <P>
                ¿Puedes imaginarlo?
            </P>

            <ImgCont>
                <StaticImage src={'../../images/objecion.png'} alt="Escuela de Cuatro" />
            </ImgCont>

            <H2
                color={orange}
            >
                Sólo por {monto(47, cambio, moneda)}
            </H2>

            <Button
                url={urlButton2}
            >
                GARANTIZAR AHORA!
            </Button>

            <PCenter>
                Esta es una OFERTA ESPECIAL que puede cerrar en cualquier momento
            </PCenter>

            <H2>
                ¿Qué es lo que necesitas hacer ahora?
            </H2>
            <P>
                Al apretar el botón verde serás direccionado a una 
                página segura y protegida donde podrás realizar tu 
                inscripción y en menos de 5 minutos recibirás un 
                correo con el acceso al Desafío de Cero a Cuatrista.
            </P>
            <H2>
                Ahora tengo que ser duro contigo.
            </H2>
            <P>
                Pero primero te pido permiso para eso.
            </P>
            <P>
                Va a parecer arrogancia, pero mi vida no va a cambiar 
                en nada si no adquieres el curso, porque estamos 
                hablando sólo de {monto(47, cambio, moneda)} …
            </P>
            <P>
                Entonces no creas que este texto es para 
                esforzarme vendiendo el método.
            </P>
            <P>
                Porque esto no es sobre mi, ES SOBRE TÍ.
            </P>
            <P>
                Y sobre que tan lejos quieres ir o cuánto 
                quieres lograr tus sueños.
            </P>
            <P>
                ¿Será qué lo quieres lo suficiente para que 
                inviertas solo {monto(47, cambio, moneda)} en algo que finalmente te durará toda la vida?
            </P>

            <H2>
                Y si rodastes la página hasta aquí sin ver lo anterior…
            </H2>
            
            <P>
                Si tal vez estabas en en corre, corre del día a 
                día, y no lograste leer la información con 
                detalles, aquí te resumo;
            </P>
            <P>
                Lo que estoy ofreciendo aquí es que hagas parte 
                de la única escuela online del cuatro venezolano 
                que te enseñará el paso a paso detallado para 
                que logres hasta en menos de 30 días tocar todas 
                tus canciones favoritas en el Cuatro Venezolano, 
                esta oportunidad viene acompañada de varios bonos 
                exclusivos que sumando todo dan un valor total de 
                {monto(397, cambio, moneda)} pero hoy podrás 
                llevártelo todo por <b>{monto(47, cambio, moneda)}</b>
            </P>
            <P>
                Y si, yo sé, es un precio muy bajo y que 
                no tiene el menor sentido.
            </P>
            <P>
                Estoy dando mi mejor para que no tengas 
                dudas en dar el primer paso conmigo en dirección 
                a finalmente cumplir el sueño de tocar el cuatro 
                venezolano como tanto anhelas.
            </P>
            <P>
                Ah! y recuerda que este precio no estará disponible para siempre.
            </P>
            <P>
                Por eso aquí abajo te dejaré el botón para que 
                puedas hacer click ahora y garantizar el tuyo.
            </P>

            <Button
                url={urlButton3}
            >
                GARANTIZAR AHORA!
            </Button>

            <PCenter>
                Esta es una OFERTA ESPECIAL que puede cerrar en cualquier momento
            </PCenter>

            <br />

            <P>
                Gracias por dejarme compartir esta oportunidad contigo.
            </P>
            <P>
                Rezo para que Dios bendiga tu camino junto 
                al cuatro venezolano como noble acompañante 
                de vida, igual que a mi.
            </P>
            <P>
                Cuenta conmigo.
            </P>
            <P>
                Nos vemos en breve…
            </P>
            <P>
                Angel Fernandez.
            </P>

            <br />

            <P>
                Te quedó alguna duda sobre como funciona la 
                Escuela del Cuatro Venezolano? Aquí Abajo te 
                dejaré un botón para que puedas aclarar cualquier 
                duda con mi equipo vía WhatsApp
            </P>

            <Button
                url={urlButton4}
            >
                Chat por Whatsapp
            </Button>

        </Section>
    )
}
export default Objeciones;