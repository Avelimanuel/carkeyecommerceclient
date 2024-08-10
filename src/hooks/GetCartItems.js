import{ useState,useEffect } from 'react'
import axios from 'axios'

export const GetCartItems = () => {
    const [products ,setProducts] = useState([])
    
    const fetchCartProducts = async () =>{
        try {
            const response = await axios.get("http://localhost:3001/products")
            setProducts(response.data.products)
        } catch (error) {
            alert("Something went wrong")
        }

    }

    useEffect(()=>{
        fetchCartProducts()
    },[])

    return {products}
 
}


