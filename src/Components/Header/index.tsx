import logoImg from '../../assets/Logo.svg'
import { Container, Content } from './styles'
import profile from '../../assets/profile.svg'

export function Header(){
    return (
        <Container>
            <Content>
            <img src={logoImg} alt="Quackfy" />
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