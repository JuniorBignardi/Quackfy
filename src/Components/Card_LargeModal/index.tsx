import Modal from "react-modal"
import { Container, Content} from "./styles";
import profile from "./../../assets/profile.svg"


interface Card_LargeModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
    src: any;
    alt: string;
    title: string;
    description: string;
    category: string;
    difficulty: string;

}

export function Card_LargeModal({isOpen,onRequestClose,src,alt,title,description,category,difficulty}:Card_LargeModalProps){
    return(
        <Modal
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName='react-modal-overlay-cards'
        className='react-modal-content-cards'
        >
        <Container>
            <Content>
                <div className="box">
                    <img src={src} alt={alt} />
                    <p className="titulo">{title}</p>
                </div>
                <p className="descricao">Teste seus conhecimentos sobre {description}</p>
            </Content>
        </Container>
        </Modal>
    )
}