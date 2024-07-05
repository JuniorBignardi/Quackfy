import {Container} from "./styles";
import { Card_small } from "../Card_small";
import { Card_large } from "../Card_large";
import { Card_medium } from "../Card_medium";
import { Search } from "../Search";
import { useState } from "react";



export function Dashboard(){

    const [search, setSearch] = useState('');

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
    {component: Card_small},
    {component: Card_medium},
    {component: Card_large},
]


const shuffledCategories = shuffleArray(categories);

    return(
        <>
        <Search search={search} setSearch={setSearch} />
        <Container>
            {shuffledCategories.filter((category:any)=>{
                if(search === ''){
                    return true;
                } else{
                    return category.name.toLowerCase().includes(search.toLowerCase());
                }
            }).map((item:any,index:any)=>{
                const Component = components[Math.floor(Math.random()*components.length)].component;
                const difficulty_level = difficulty[Math.floor(Math.random()*difficulty.length)]
                return (
                        <Component key={index} src="https://picsum.photos/200" alt="blabla" title={item.name} description={item.name} category={item.value} difficulty={difficulty_level}/>
                )
            })}
        </Container>
        </>
    )
}