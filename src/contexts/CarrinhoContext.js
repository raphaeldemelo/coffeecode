import React, { useState, createContext } from 'react';

export const CarrinhoContext = createContext({});

export default function CarrinhoProvider({ children }) {
    const [carrinho, setCarrinho] = useState([]);
    const [total, setTotal] = useState(0);

    function addItemCarrinho(novoItem) {
        // ver se esse item já está no seu carrinho, adicionamos +1 quantidade
        // se não tiver no carrinho, então adicionamos no carrinho

        const indexItem = carrinho.findIndex(item => item.id === novoItem.id);
        if (indexItem !== -1) {
            //se entrou aqui, quer dizer que temos que adicionar porque ele já está na sua lista
            let cartList = carrinho;
            cartList[indexItem].amount = cartList[indexItem].amount + 1;
            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].preco;
            setCarrinho(cartList);
            totalResultCart(cartList)
            return;
        }

        let data = {
            ...novoItem,
            amount: 1,
            total: novoItem.preco
        }

        setCarrinho(products => [...products, data])
        totalResultCart([...carrinho, data])
        console.log([...carrinho, data])
    }

    function removeItemCart(product) {
        const indexItem = carrinho.findIndex(item => item.id === product.id);
        if (carrinho[indexItem]?.amount > 1) {
            let cartList = carrinho;
            cartList[indexItem].amount = cartList[indexItem].amount - 1;
            cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].preco;
            setCarrinho(cartList);
            totalResultCart(cartList);
            return;
        }

        const removeItem = carrinho.filter(item => item.id !== product.id)
        setCarrinho(removeItem)
        totalResultCart(removeItem)
    }

    function totalResultCart(items) {
        let meuCarrinho = items;
        let result = meuCarrinho.reduce((acc, item) => { return acc + item.total }, 0)
        setTotal(result.toFixed(2));
    }


    return (
        <CarrinhoContext.Provider value={{ carrinho, addItemCarrinho, removeItemCart, total }}>
            {children}
        </CarrinhoContext.Provider>
    )
}