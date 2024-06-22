import { Container, Content } from "./styles";
import { useNavigate } from "react-router-dom";

interface Card_mediumProps{
    src: any;
    alt: any;
    title: string;
    description: string;
    category: string;
    difficulty: string;

}


export function Card_medium({src,alt,title,description,category,difficulty}: Card_mediumProps){

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