import { render,screen } from "@testing-library/react"
import PokeCard from "."

describe('<PokeCard />',()=>{
    
    it('Should render PokeCard correct',()=>{
        const png = 
        render(<PokeCard name="bulba" id={1} url="https://pokeapi.co/api/v2/pokemon/1/"></PokeCard>)
        expect(screen.getByRole('heading')).toBeInTheDocument()
    })


})


