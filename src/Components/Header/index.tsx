import logoImg from '../../assets/Logo.svg'
import { Container, Content } from './styles'
import profile from '../../assets/profile.svg'
import { Link } from 'react-router-dom'

export function Header(){
    return (
        <Container>
            <Content>
            <Link to='/'><img src={logoImg} alt="Quackfy"></img></Link>
            <div className='left'>
                <div>
                    <img className='profile' src={profile} alt="" />
                </div>
                <button type="button">
                    Criar quiz
                </button>
            </div>
            </Content>
        </Container>
    )
}