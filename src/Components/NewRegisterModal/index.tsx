import Modal from "react-modal";
import { Container } from "./styles";
import GoogleLogo from "../../assets/google.svg"
import QuackfyLogo from "../../assets/quackfylogo.svg"
import { useState } from "react";
import { auth, db } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {setDoc, doc} from "firebase/firestore";

interface NewRegisterModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewRegisterModal({isOpen,onRequestClose}:NewRegisterModalProps){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');


    const handleRegister = async (e: any) => {
        
        e.preventDefault();

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log(user);
            
            if(user){
                await setDoc(doc(db, "Users", user.uid),{
                    email: user.email,
                    name: name,
                    value: 0
                });
        }
            console.log("Usuário registrado com sucesso!");
            window.alert("Usuário registrado com sucesso!");
            window.location.href="/";
        }catch (error) {
            console.error("Ocorreu um erro");
            window.alert("Ocorreu um erro, verifique se já possui uma conta ou tente novamente com outra senha!");
      
        }
    }
    return(
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
        >
                <Container onSubmit={handleRegister}>
                    <img className="quackfy" src={QuackfyLogo} alt="Logo do site de Quiz Quackfy" />
                    <h1>Faça seu login ou cadastre-se para acessar todos os conteúdos disponíveis</h1>
                        
                    <div>
                    <label htmlFor="">Nome:</label>
                    <br />
                        <input type="text" 
                        name="fname" 
                        id="fname" 
                        placeholder="Nome" 
                        onChange={(e) => setName(e.target.value)} required/>
                    </div>

                    <div>
                    <label htmlFor="">E-mail:</label>
                    <br />
                        <input type="text" 
                        name="femail" 
                        id="femailregister" 
                        placeholder="Endereço de e-mail" 
                        onChange={(e) => setEmail(e.target.value)} required/>
                    </div>

                    <div>
                        <label htmlFor="">Senha:</label>
                        <br />
                        <input 
                        type="password" 
                        name="fsenha" 
                        id="fsenharegister" 
                        placeholder="Senha" 
                        onChange={(e) => setPassword(e.target.value)} required/>
                    </div>

                    <button  className="cadastrar" type="submit" >Cadastrar-se</button>
                    <p>Ou cadastre-se com o Google</p>
                    <button className="google"><img src={GoogleLogo} alt="botão de login com o Google" /></button>
                </Container>
        </Modal>
    )
}