export const addItem = (item,qte,prix)=>{
    let cart = []
    if(typeof window !== "undefined"){
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'))
        }
        cart.push({
            ...item,
            qte,
            prix,
            count:1
        })
        cart = Array.from(new Set(cart.map(p=>p.id))).map(id=>{
            return cart.find(p=>p.id === id)
        });
        localStorage.setItem("cart",JSON.stringify(cart))
        // next()
    }
}

export const itemTotal = () =>{
    if(typeof window !== "undefined"){
        if(localStorage.getItem("cart")){
            return JSON.parse(localStorage.getItem("cart")).length
        }
    }
    return 0;
}
export const getCart = () =>{
    if(typeof window !== "undefined"){
        if(localStorage.getItem("cart")){
            return JSON.parse(localStorage.getItem("cart"))
        }
    }
    return [];
}