import Modal from "react-modal";
import { Container } from "./styles";
import GoogleLogo from "../../assets/google.svg"
import QuackfyLogo from "../../assets/quackfylogo.svg"
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from "react";
import { auth } from "../../firebaseConfig";

interface NewUserModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
    handle: () => void;
}

export function NewUserModal({isOpen,onRequestClose, handle}:NewUserModalProps){
      
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("Usuário loggado com sucesso!")
            window.alert("Usuário loggado com sucesso!")
            window.location.href="/";
        }catch(error){
            console.error("Ocorreu um erro");
            window.alert("Ocorreu um erro, verifique se já é um usuário cadastrado");
        }
    }

    return(
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
        >
                <Container onSubmit={handleSubmit}>
                    <img className="quackfy" src={QuackfyLogo} alt="Logo do site de Quiz Quackfy" />
                    <h1>Faça seu login ou cadastre-se para acessar todos os conteúdos disponíveis</h1>
                    
                <div>
                <label htmlFor="">E-mail:</label>
                <br />
                    <input type="text" 
                    name="femail" 
                    id="feamil" 
                    placeholder="Endereço de e-mail" 
                    onChange={(e) => setEmail(e.target.value)} required/>
                </div>

                    <div>
                        <label htmlFor="">Senha:</label>
                        <br />
                        <input type="password" 
                        name="fsenha" 
                        id="fsenha" 
                        placeholder="Senha"  
                        onChange={(e) => setPassword(e.target.value)} required/>
                    </div>

                    <button  className="entrar" type="submit" >Entrar</button>

                    <p>Caso ainda não tenha uma conta, <a onClick={handle}>cadastre-se aqui</a> ou utilize sua conta do Google</p>
                    <button className="google"><img src={GoogleLogo} alt="botão de login com o Google" /></button>

                </Container>
        </Modal>
    )

}