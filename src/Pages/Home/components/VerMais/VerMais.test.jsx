import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { renderIntoDocument } from "react-dom/test-utils";
import ButtonVerMais from "./index"

describe('<ButtonVerMais />',()=>{
    it('should render the button with the text',()=>{
      render(<ButtonVerMais ></ButtonVerMais>)
      const button = screen.getByRole('button',{name: "Ver mais"})
        
    });

    it('should call function on button click', ()=>{
        fn = jest.fn()
        render(<ButtonVerMais loadmore={fn}/>)
        
        const button = screen.getByRole('button',{name: "Ver mais"})
        userEvent.click(button);
        expect(fn).toBeCalledTimes(1)


    })
    it('should be disabled when disable is true', ()=>{
        
        render(<ButtonVerMais desabilitar={true}/>)
        
        const button = screen.getByRole('button',{name: "Ver mais"})
        
        userEvent.click(button);
        expect(button).toBeDisabled()
        })
    it('should be enabled when disable is false', ()=>{
    
        render(<ButtonVerMais desabilitar={false}/>)
        
        const button = screen.getByRole('button',{name: "Ver mais"})
        
        userEvent.click(button);
        expect(button).toBeEnabled()
        })
  })
  
  