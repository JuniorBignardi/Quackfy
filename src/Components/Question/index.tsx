import { Container } from "./styles";

type Props = {
    question: string;
}

const Question: React.FC<Props>= ({question}): JSX.Element => {
    return(
        <Container>
            {question}
        </Container>
    )
}

export default Question;