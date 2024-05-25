import { Card_large, Card_medium, Card_small, Container } from "./styles";
import { Link } from "react-router-dom";

export function Dashboard(){
    return(
        <Container>
            <Card_small></Card_small>
            <Card_small/>
            <Card_medium/>
            <Card_large/>
            <Card_small/>
            <Card_medium/>
            <Card_large/>
            <Card_medium/>
            <Card_small/>
            <Card_medium/>
            <Card_small/>
            <Card_small/>
            <Card_small/>
            <Card_medium/>
            <Card_large/>
            <Card_small/>
            <Card_medium/>
            <Card_large/>
            <Card_small/>
            <Card_small/>
            <Card_small><Link to="quiz">Começar</Link></Card_small>


        </Container>
    )
}