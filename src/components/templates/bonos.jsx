import React from 'react';

import Section from '../atoms/section';
import H2 from '../atoms/h2';
import Bono from '../organisms/bono';

import { orange } from '../../lib/colors';

import bono1 from '../../images/bono1.jpg';
import bono2 from '../../images/bono2.jpg';
import bono3 from '../../images/bono3.png';
import bono4 from '../../images/bono4.png';
import bono5 from '../../images/bono5.jpg';
import bono6 from '../../images/bono6.png';
import bono7 from '../../images/bono7.png';

import { bono1Text, bono2Text, bono3Text, bono4Text, bono5Text, bono6Text, bono7Text } from '../../lib/bonoText.js';


const Bonos = ({cambio, moneda}) => {
    return(
        <Section>
            <H2 
                bigText
                color={orange}
            >
                Comienza a aprender ya y recibe todos estos bonos 
            </H2>
            <Bono
                cta
                number={1}
                valor={50}
                img={bono1}
                text={bono1Text}

                moneda={moneda}
                cambio={cambio}
            />
            <Bono 
                number={2}
                valor={197}
                img={bono2}
                text={bono2Text}

                moneda={moneda}
                cambio={cambio}
            />
            <Bono 
                cta
                number={3}
                valor={40}
                img={bono3}
                text={bono3Text}

                moneda={moneda}
                cambio={cambio}
            />
            <Bono 
                cta
                number={4}
                valor={'INVALUABLE'}
                img={bono4}
                text={bono4Text}
            />
            <Bono 
                number={5}
                valor={'INCALCULABLE'}
                img={bono5}
                text={bono5Text}
            />
            <Bono 
                number={6}
                valor={'INVALUABLE'}
                img={bono6}
                text={bono6Text}
            />
            <Bono 
                number={7}
                valor={'INVALUABLE'}
                img={bono7}
                text={bono7Text}
            />
        </Section>
    )
}
export default Bonos;