import { Container, Content } from "./styles";
import { useEffect, useState } from "react";
import { auth, db, storage } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";

interface userDetails{
    email: string;
    name: string;
    value: number;
}

export function Rank(){

    const [others_array, setOthers_array] = useState<Array<{profilepic: any, name: any, pontuação: any, url: any}>>([]);
    const [others_array2, setOthers_array2] = useState<Array<{profilepic: any, name: any, pontuação: any, url: any}>>([]);
    const user = auth.currentUser;
    
    
    const [, setUserDetails] = useState<userDetails | null>(null);
    const [photoURL, setPhotoURL] = useState('https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=')
    const [nome, setNome] = useState(null);
    const [pontuacao, setPontuacao] = useState(null);
    var cont = 0;

    const fetchUserData=async()=>{
        auth.onAuthStateChanged(async(user: any)=>{
            console.log(user);
            const docRef = doc(db, "Users", user.uid);
            const docSnap = await getDoc(docRef);
            
            if(docSnap.exists()) {
                setUserDetails(docSnap.data() as userDetails);
                console.log(docSnap.data());
            } else {
                console.log("Usuário deslogado");
            }
        });
    };

    for(var i = 0; i < others_array2.length; i++)
        if(others_array2[i].url == user?.uid){
            cont = i+1; 
    } 

    useEffect(()=>{
        if (user?.photoURL) {
            setPhotoURL(user.photoURL)
        }
        fetchUserData();
        
        if(user != null){
            var userRef = db.collection('Users').doc(user.uid);
            userRef.get().then((doc) => {
                if(doc.exists){
                    setNome(doc.data()?.name);
                    setPontuacao(doc.data()?.value);
                        
                }
            }).catch((error) => {
                console.log("Error", error);
            })  
        }

        //Fazer o resto do rank
        var userRef2 = db.collection('Users');
        setOthers_array(([]));
        // Manter limite de 4 usuários
        userRef2.orderBy('value', 'desc').limit(4).get()
        .then((querySnapshot) => {
            const promises: any[] = [];
            querySnapshot.forEach((doc) => {
                const promise = getDownloadURL(ref(storage, 'imagem/' + doc.id + '.png')).then((photoRef) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data().name);
                    return {profilepic: photoRef, name: doc.data()?.name, pontuação: doc.data()?.value, url: doc.id};
                });
                promises.push(promise);
            });

            Promise.all(promises).then((results) => {
                setOthers_array(results);
                setOthers_array((vetorAnterior => vetorAnterior.sort((a, b) => b.pontuação - a.pontuação)));
            });
        })

        var userRef3 = db.collection('Users');
        setOthers_array2(([]));
        userRef3.orderBy('value', 'desc').get()
        .then((querySnapshot) => {
            const promises: any[] = [];
            querySnapshot.forEach((doc) => {
                const promise = getDownloadURL(ref(storage, 'imagem/' + doc.id + '.png')).then((photoRef) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data().name);
                    return {profilepic: photoRef, name: doc.data()?.name, pontuação: doc.data()?.value, url: doc.id};
                });
                promises.push(promise);
            });

            Promise.all(promises).then((results) => {
                setOthers_array2(results);
                setOthers_array2((vetorAnterior => vetorAnterior.sort((a, b) => b.pontuação - a.pontuação)));
            });
        })

    },[user])

    async function handleClick(){

        try{
            window.location.href = "/ranking";
            
        } catch(error){
            console.error("Erro!");
        }

    }

    return(
        <Container>
            <Content>
                <div className="user_ranking">
                    <p className="user_position"> {cont} </p>
                        <img src={photoURL} alt="foto do usuário" className="userprofilepic" />
                        <p className="username">{nome}</p>
                    <p className="user_points">
                        Pontuação: {pontuacao}
                    </p>
                </div>
                <div className="filters">
                    <button>Global</button>
                    <button onClick={handleClick}>Atualizar</button>
                </div>

                <div className="others_ranking">
                    {others_array.map((user,index)=>{
                        return(
                            <div className="otheruser_ranking">
                            <p className="user_position"> {index+1} </p>
                            <div className="otherdetails">
                                <img src={user.profilepic} alt="foto do usuário" className="otherprofilepic" />
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