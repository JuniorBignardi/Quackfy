import logoImg from "../../assets/LogoMobile.svg"
import { Container } from "./styles"


export function Loading(){

    return(
        <Container>
            <img src={logoImg} alt="Logo do Quiz Quackfy" className="zoom-in-out-box" />
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </Container>
    )

}