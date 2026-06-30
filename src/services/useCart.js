import { useContext } from "react"
import  CartContext  from "./CartContext.js"

function useCart(){
    const ctx = useContext(CartContext)
    return ctx

}

export default useCart