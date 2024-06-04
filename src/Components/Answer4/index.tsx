import { Container } from "./styles";


type Props = {
    letter: string;
    answer: string;
}


const Answer4: React.FC<Props> = ({letter, answer}) =>{
    return(
        <Container>
            
            {letter}. {answer}
        </Container>
    )
}

export default Answer4;