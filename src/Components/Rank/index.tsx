import { Container, Content } from "./styles";
import profile from "./../../assets/profile.svg"

export function Rank(){

    const others_array = [
    {profilepic: profile, name: 'Anakira', pontuação: 1200},
    {profilepic: profile, name: 'LuanPedro', pontuação: 1154},
    {profilepic: profile, name: 'Rukasu', pontuação: 1150},
    {profilepic: profile, name: 'Sonequita02', pontuação: 1123},
    ]

    return(
        <Container>
            <Content>
                <div className="user_ranking">
                    <p className="user_position"> 7 </p>
                    <div className="userdetails">
                        <img src={profile} alt="foto do usuário" className="userprofilepic" />
                        <p className="username">Juninhogameplays</p>
                    </div>
                    <p className="user_points">
                        Pontuação: 1234
                    </p>
                </div>
                <div className="filters">
                    <button>Global</button>
                    <button>Amigos</button>
                </div>

                <div className="others_ranking">
                    {others_array.map((user,index)=>{
                        return(
                            <div className="otheruser_ranking">
                            <p className="user_position"> {index+1} </p>
                            <div className="otherdetails">
                                <img src={profile} alt="foto do usuário" className="otherprofilepic" />
                            </div>
                            <div className="otherusername">
                            <p className="username">{user.name}</p>
                            </div>
                            <p className="user_points">
                                Pontuação: {user.pontuação}
                            </p>
                        </div>
                        )
                    })}
                </div>
            </Content>
        </Container>
    )
}