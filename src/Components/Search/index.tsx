import { Container } from "./styles";



export function Search({search, setSearch}:{search: any, setSearch: any}){
    return(
        <Container>
            <form action="">
            <input type="text" name="search_form" id="search_form" placeholder="Procure seus quizes favoritos" value={search} onChange={(e)=> setSearch(e.target.value)}/>
            </form>
        </Container>
    )
}