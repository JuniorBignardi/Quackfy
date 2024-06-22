import {Container} from "./styles";
import { Card_small } from "../Card_small";
import { Card_large } from "../Card_large";
import { Card_medium } from "../Card_medium";



export function Dashboard(){

const categories = [
    {name: 'Cotidiano', value: 9},
    {name:'Música', value: 12},
    {name: 'Ciência', value:17},
    {name: 'Esportes', value: 21},
    {name: 'Geografia', value: 22},
    {name: 'História', value: 23},
    {name: 'Política', value: 24},
    {name: 'Arte', value: 25},
    {name: 'Celebridades', value: 26},
    {name: 'Animais', value: 27},
    {name: 'Veículos', value:28},
    {name: 'Quadrinhos', value:29},
    {name: 'Desenhos', value:32},
    {name: 'Animes', value:31},
    {name: "Matemática", value:19},
    {name: 'Computação', value:18},
    {name: 'Games', value:15},
    {name: 'Televisão', value:14},
    {name: 'Livros', value:10},
    {name: 'Filmes', value:11},
    {name: 'Mitologia', value:20},
]

const difficulty = ['easy','medium','hard']

const shuffleArray = (array: any) => {
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [array[i],array[j]] = [array[j], array[i]];
    }
    return array;
};

const components = [
    {component: Card_small, props: {src:'https://www.petz.com.br/blog/wp-content/uploads/2019/07/vida-de-gato.jpg',alt: 'gatito',title:"gatos",description:"gatinhosinhos"}},
    {component: Card_medium, props: {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8YCbLchWBk9jQ1mkgk0An8SjFpJz88cEzNA&s',alt: 'cachorro',title:"cachorros",description:"cachorrinhos"}},
    {component: Card_large, props: {src:'https://aquatividade.com.br/wp-content/uploads/2023/12/Bagre-Africano.jpg',alt: 'bagre',title:"bagrinho",description:"bagres"}},
]


const shuffledCategories = shuffleArray(categories);

    return(
        <Container>
            {shuffledCategories.map((item:any,index:any)=>{
                const Component = components[Math.floor(Math.random()*components.length)].component;
                const difficulty_level = difficulty[Math.floor(Math.random()*difficulty.length)]
                return (
                        <Component key={index} src="https://picsum.photos/200" alt="blabla" title={item.name} description={item.name} category={item.value} difficulty={difficulty_level}/>
                )
            })}
        </Container>
    )
}