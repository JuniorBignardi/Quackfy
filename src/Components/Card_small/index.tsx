import { Container, Content } from "./styles";
import { useNavigate } from "react-router-dom";


interface Card_smallProps{
    src: any;
    alt: any;
    title: string;
    description: string;
    category: string;
    difficulty: string;
}


export function Card_small({src,alt,title,description,category,difficulty}:Card_smallProps){

   const navigate = useNavigate();

    return(
        <Container onClick={()=>navigate(`quiz/${category}/${difficulty}`)}>
            <Content>
                    <div className="box">
                        <img src={src} alt={alt} />
                        <p className="titulo">{title}</p>
                    </div>
                    <p className="descricao">Teste seus conhecimentos sobre {description}</p>
            </Content>
        </Container>
    )
}