import { useState } from "react";
import { Container, Content } from "./styles";
import { useNavigate } from "react-router-dom";
import { Card_LargeModal} from "../Card_LargeModal";


interface Card_largeProps{
    src: any;
    alt: string;
    title: string;
    description: string;
    category: string;
    difficulty: string;

}


export function Card_large({src,alt,title,description,category,difficulty}: Card_largeProps){


    //()=>navigate(`quiz/${category}/${difficulty}`)

    const [isCardLargeModalOpen,setIsCardLargeModalOpen] = useState(false);

    function handleOpenCardLargeModal(){
        setIsCardLargeModalOpen(true);
    }

    function handleCloseLargeModal(){
        setIsCardLargeModalOpen(false);
    }
    
    const navigate = useNavigate();
    
    return(
        <Container onClick={handleOpenCardLargeModal}>
            <Content>
                <div className="box">
                    <img src={src} alt={alt} />
                    <p className="titulo">{title}</p>
                </div>
                <p className="descricao">Teste seus conhecimentos sobre {description}</p>
                <Card_LargeModal isOpen={isCardLargeModalOpen} onRequestClose={handleCloseLargeModal} src={src} alt={alt} title={title} description={description} category={category} difficulty={difficulty}></Card_LargeModal>
            </Content>
        </Container>
    )
}