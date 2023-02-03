import './App.css'
import { useContext, useState } from "react";
import { ShoppingCartContext } from "./context/ShoppingCartContext.jsx";

function App() {

    const { cart, addToCart } = useContext(ShoppingCartContext)
    const [ inputValue, setInputValue ] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        addToCart(inputValue)
    }

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <input type="text" value={ inputValue } onChange={ (e) => { setInputValue(e.target.value)}}/>
                <button type="submit">Add To Cart</button>
            </form>
            <ul>
                { cart.map((item, i)=>{
                    return(
                        <li key={ i }>{ item }</li>
                    )
                })}
            </ul>
        </>
    )
}

export default App
