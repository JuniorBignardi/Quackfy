import Modal from "react-modal";
import { Container } from "./styles";
import GoogleLogo from "../../assets/google.svg"
import QuackfyLogo from "../../assets/quackfylogo.svg"

interface NewUserModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
    handle: () => void;
}

export function NewUserModal({isOpen,onRequestClose, handle}:NewUserModalProps){

    return(
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
        >
            <Container>
                <img className="quackfy" src={QuackfyLogo} alt="Logo do site de Quiz Quackfy" />
                <h1>Faça seu login ou cadastre-se para acessar todos os conteúdos disponíveis</h1>
                
               <div>
               <label htmlFor="">E-mail:</label>
               <br />
                <input type="text" id="femail" placeholder="Endereço de e-mail"/>
               </div>

                <div>
                    <label htmlFor="">Senha:</label>
                    <br />
                    <input type="text" id="fsenha" placeholder="Senha" />
                </div>

                <button  className="entrar" type="submit">Entrar</button>

                <p>Caso ainda não tenha uma conta, <a onClick={handle}>cadastre-se aqui</a> ou utilize sua conta do Google</p>
                <button className="google"><img src={GoogleLogo} alt="botão de login com o Google" /></button>

            </Container>
        </Modal>
    )

}