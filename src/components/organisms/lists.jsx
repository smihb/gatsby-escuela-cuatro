import React from "react";
import styled from 'styled-components';
import P from "../atoms/p";

const Lists = () =>{
    return(
        <Container>
            <List>
                <P>✔️ Guías en PDF</P>
                <P>✔️ Desafíos</P>
                <P>✔️ Curso online</P>
                <P>✔️ Mentorías</P>
                <P>✔️ Master classes</P>
                <P>✔️ Consultorías</P>
                <P>✔️ Repertorios</P>
                <P>✔️ Comunidad en linea</P>
                <P>✔️ Entrevistas</P>
                <P>✔️ Salsa</P>
                <P>✔️ Música Brasileña</P>
            </List>
            <List>
                <P>✔️ Joropo</P>
                <P>✔️ Joropo Oriental</P>
                <P>✔️ Valse Venezolano</P>
                <P>✔️ Pasaje</P>
                <P>✔️ Merengue Caraqueño</P>
                <P>✔️ Gaita</P>
                <P>✔️ Parranda Navideña</P>
                <P>✔️ Aguinaldos</P>
                <P>✔️ Boleros</P>
                <P>✔️ Rock</P>
                <P>✔️ Jazz</P>
            </List>
        </Container>
    )
}
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 960px;
    margin: 0 auto;
`;
const List = styled.div`

`;
export default Lists;