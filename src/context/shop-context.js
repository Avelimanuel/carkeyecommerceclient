import { createContext, useState } from "react";

const defaultValues = {
    addToCart : () => null,
    removeFromCart: () => null,
    updateCartItemCount:() => null,
    getCartItemCount : () => 0
}

export const  ShopContext = createContext(defaultValues)


export const ShopContextProvider = (props)=>{
    const [cartItems,setCartItems] = useState({})

    const getCartItemCount = (itemId) =>{
        if(itemId in cartItems){
            return cartItems[itemId]
        }else{
            return 0
        }


    }

    const addToCart = (itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }

    }

    const removeFromCart = (itemId) =>{

    }

    const updateCartItemCount = (newAmount,itemId) =>{

    }

    const contextValue = {
        addToCart,
        removeFromCart,
        updateCartItemCount,
        getCartItemCount

    }
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}