//CARRITO CON LOCALSTORAGE
import React, { createContext, useState, useEffect } from 'react';
import Swal from 'sweetalert2'

const Context = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            return JSON.parse(savedCart);
        } else {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addItem = (productToAdd, quantity) => {
        const newItem = {
            ...productToAdd,
            quantity
        };
        if (isInCart(newItem.id)) {
            const updatedCart = cart.map((prod) => {
                if (prod.id === newItem.id) {
                    return { ...prod, quantity: prod.quantity + newItem.quantity };
                }
                return prod;
            });
            setCart(updatedCart);
        } else {
            setCart([...cart, newItem]);
        }
    };

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    const removeItem = (id) => {
        const updatedCart = cart.filter((prod) => prod.id !== id);
        setCart([...updatedCart]);
    };

    const clearCart = () => {
        setCart([]);
    };

    const getTotal = () => {
        return cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);
    };

    const getQuantity = () => {
        if(isInCart){
            return cart.reduce((acc) => acc + 1 , 0);
        }
    };
    
    const decrementarItem = (id) => {
        const updatedCart = cart.map((prod) => {
            if (prod.id === id) {
                const newQuantity = Math.max(prod.quantity - 1, 1);
                return { ...prod, quantity: newQuantity };
            }
            return prod;
        });
        setCart(updatedCart);
    };

    const incrementarItem = (id, stock) => {
        const updatedCart = cart.map((prod) => {
            if (prod.id === id) {
                const newQuantity = Math.min(prod.quantity + 1, stock);
                if( newQuantity === prod.quantity){
                    Swal.fire({
                        title: "Llego al limite de stock",
                        confirmButtonText: "Aceptar",
                        background: "#D9D8D9",
                        color:"#28193D",
                        confirmButtonColor:"#28193D",
                        
                    })
                }
                return { ...prod, quantity: newQuantity };
            }
            return prod;
        });
        setCart(updatedCart);
    };

    const currentQuantity = (id) => {
        const prod = cart.find((item) => item.id === id);
        return prod ? prod.quantity : 0;
    };

    return (
        <Context.Provider
            value={{
                cart,
                setCart,
                addItem,
                removeItem,
                clearCart,
                getTotal,
                getQuantity,
                decrementarItem,
                incrementarItem,
                currentQuantity
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default Context;

//CARRITO SIN LOCALSTORAGE
// import React, { createContext, useState } from 'react'
// const Context = createContext()
// export const CartContextProvider = ({ children }) => {
//     const [ cart, setCart ] = useState([])
//     const addItem = (productToAdd, quantity) => {
//         const newItem = {
//             ...productToAdd,
//             quantity
//         }
//         if(isInCart(newItem.id)) {
//             const updatedCart = cart.map((prod) => {
//                 if(prod.id === newItem.id) {
//                     return { ...prod, quantity: prod.quantity + newItem.quantity }
//                 }
//                 return prod
//             })
//             setCart(updatedCart)
//         }else {
//         setCart([...cart, newItem])
//         }
//     }
//     const isInCart = (id) => {
//         return cart.some((prod) => prod.id === id)
//     }
//     const removeItem = (id) => {
//         const updatedCart = cart.filter((prod) => prod.id !== id)
//         setCart([...updatedCart])
//     }
//     const clearCart = () => {
//         setCart([])
//     }
//     const getTotal = () => {
//         return cart.reduce((acc, item) => acc + item.precio * item.quantity, 0)
//     }
//     const getQuantity = () => {
//         return cart.reduce((acc, item) => acc + item.quantity, 0)
//     }
//     const decrementarItem = (id) =>{
//         const updatedCart = cart.map((prod) => {
//             if(prod.id === id){
//                 const newQuantity = Math.max(prod.quantity - 1, 1)
//                 return { ...prod, quantity: newQuantity}
//             }
//             return prod
//         })
//         setCart(updatedCart)
//     }
//     const incrementarItem = (id, stock) =>{
//         const updatedCart = cart.map((prod) => {
//             if(prod.id === id){
//                 const newQuantity = Math.min(prod.quantity + 1, stock)
//                 return { ...prod, quantity: newQuantity}
//             }
//             return prod
//         })
//         setCart(updatedCart)
//     }
//     const currentQuantity = (id) => {
//         const prod = cart.find((item) => item.id === id) 
//         return prod ? prod.quantity : 0
//     }
//   return (
//     <Context.Provider 
//         value={{
//             cart,
//             setCart,
//             addItem,
//             removeItem, 
//             clearCart,
//             getTotal,
//             getQuantity,
//             decrementarItem,
//             incrementarItem, 
//             currentQuantity
//         }}>
//             {children}
//     </Context.Provider>
//   )
// }
// export default Context