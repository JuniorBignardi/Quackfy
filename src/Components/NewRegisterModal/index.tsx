import Modal from "react-modal";
import { Container } from "./styles";
import GoogleLogo from "../../assets/google.svg"
import QuackfyLogo from "../../assets/quackfylogo.svg"

interface NewRegisterModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewRegisterModal({isOpen,onRequestClose}:NewRegisterModalProps){

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
               <label htmlFor="">Nome Completo:</label>
               <br />
                <input type="text" name="fname" id="fname" placeholder="Nome Completo"/>
               </div>

               <div>
               <label htmlFor="">E-mail:</label>
               <br />
                <input type="text" name="femail" id="femailregister" placeholder="Endereço de e-mail"/>
               </div>

                <div>
                    <label htmlFor="">Senha:</label>
                    <br />
                    <input type="text" name="fsenha" id="fsenharegister" placeholder="Senha" />
                </div>
                
                <div>
                    <label htmlFor="">Confirme sua senha:</label>
                    <br />
                    <input type="text" name="fsenhaconfirm" id="fsenhaconfirmregister" placeholder="Senha" />
                </div>

                <button  className="cadastrar" type="submit">Cadastrar-se</button>
                <p>Ou cadastre-se com o Google</p>
                <button className="google"><img src={GoogleLogo} alt="botão de login com o Google" /></button>

            </Container>
        </Modal>
    )

}