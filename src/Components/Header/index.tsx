import logoImg from '../../assets/Logo.svg'
import logoMobile from "../../assets/LogoMobile.svg"
import { Container, Content } from './styles'
//import profile from '../../assets/profile.svg'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { auth, db, upload, uploadGoogle } from '../../firebaseConfig'
import { doc, getDoc, setDoc } from 'firebase/firestore'

 
interface HeaderProps{
    handleOpenNewUserModal: ()=>void;
}

interface userDetails{
    email: string;
    name: string;
    value: number;
}


export function Header({handleOpenNewUserModal}:HeaderProps){
    const user = auth.currentUser;

    const [userDetails, setUserDetails] = useState<userDetails | null>(null);
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(false);
    const [photoURL, setPhotoURL] = useState('https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=')
    //const [progress, setProgress] = useState(0)

    function handleChange(e: any){
        if (e.target.files[0]) {
            setPhoto(e.target.files[0]);
        }
    }
    function handleClick(){
        upload(photo, user, setLoading);

    }

    const fetchUserData=async()=>{
        auth.onAuthStateChanged(async(user: any)=>{
            console.log(user);

            const docRef = doc(db, "Users", user.uid);
            const docSnap = await getDoc(docRef);

            if(user?.emailVerified == true && !docSnap.exists()){
                await setDoc(doc(db, "Users", user.uid),{
                    email: user.email,
                    name: user.displayName,
                    value: 0
                });
                uploadGoogle(user, setLoading);
            }
            
            if(docSnap.exists()) {
                setUserDetails(docSnap.data() as userDetails);
                console.log(docSnap.data());
            } else {
                console.log("Usuário deslogado");
            }
        });
    };
    useEffect(()=>{
        if (user?.photoURL) {
            setPhotoURL(user.photoURL)
        }
        fetchUserData();
    },[user]) 

    async function handleLogout(){
        try{
            await auth.signOut();
            console.log("Usuário logged out com sucesso!");
            window.alert("Usuário deslogado com sucesso!");
            window.location.href = "/";
            
        } catch(error){
            console.error("Erro!");
        }
    }


    return (
        <Container>
            <Content>
            <Link to='/'>
            <img src={logoImg} alt="Logo do site de Quiz Quackfy" className='desktop'/>
            <img src={logoMobile} alt="Logo do site do Quiz Quackfy" className='mobile'/>
            </Link>
            <div className='right'>
                <div className= 'dropdown'>
                    <img className='profile' src={photoURL} alt="sua foto de usuário" />
                    <div className= 'dropdown-content'>
                    {userDetails ? (
                        <>
                            <button onClick={handleLogout}>logout</button>
                            <input type="file" onChange={handleChange}/>
                            <button disabled={loading || !photo} onClick={handleClick}>Enviar</button>
                        </>
                    ) : (
                        <button onClick={handleOpenNewUserModal}>login</button>
                    )}
                    </div>
                </div>
                <button className= 'criarQuiz' type="button">
                    Criar Quiz
                </button>
            </div>
            </Content>
        </Container>
    )
}