import logoImg from '../../assets/Logo.svg'
import { Container, Content } from './styles'
import profile from '../../assets/profile.svg'
import { Link } from 'react-router-dom'


interface HeaderProps{
    handleOpenNewUserModal: ()=>void;
}


export function Header({handleOpenNewUserModal}:HeaderProps){
    return (
        <Container>
            <Content>
            <Link to='/'><img src={logoImg} alt="Logo do site de Quiz Quackfy"></img></Link>
            <div className='right'>
                <div>
                    <div className='dropdown'>
                        <img className='profile' src={profile} alt="sua foto de usuário" />
                        <div className='dropdown-content'>
                            <p onClick={handleOpenNewUserModal}>login</p>
                            <p>logout</p>
                        </div>
                    </div>
                </div>
                <button type="button">
                    Criar quiz
                </button>
            </div>
            </Content>
        </Container>
    )
}