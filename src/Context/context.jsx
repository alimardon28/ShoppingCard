import { createContext, useEffect, useState } from "react";

const Context = createContext()

function Provider ({children}){



    const [lang , setLang] = useState(window.localStorage.getItem('lang') || 'uz');
    const  [product , setProduct] = useState([]);
    const  [products , setProducts] = useState(window.localStorage.getItem('products') || '');
    const  [korzinka, setKorzinka] = useState([])

    useEffect(()=>{
        fetch('https://shoppings-corzina.herokuapp.com/posts')
        .then(res => res.json())
        .then(data => setProducts(data))

    }, [setProducts])



    useEffect(()=>{
        window.localStorage.setItem('products' , products)
    } , [products])



    useEffect(()=>{
        window.localStorage.setItem('lang' , lang)
    } , [lang])

    return(
        <Context.Provider value={{lang , setLang , product , setProduct , products ,setProducts, korzinka, setKorzinka}}>{children}</Context.Provider>
    )
}

export {Context , Provider}
