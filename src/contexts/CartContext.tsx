import { createContext } from "react";

export const CartContext = createContext({
    items: [],
    totalAmount: 0,
    addItem: (item: any) => {},
    removeItem: (id: any) => {},
    clearCart: () => {},
});

import { useEffect, useReducer, useState } from "react";

const defaultCartState = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
    if (action.type === "REMOVE") {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter((item) => item.id !== action.id);
        } else {
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount - 1,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }
    if (action.type === "ADD") {
        const updatedTotalAmount =
            state.totalAmount + action.item.price * action.item.amount;
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return { items: updatedItems, totalAmount: updatedTotalAmount };
    }
    if (action.type === "CLEAR") {
        return { items: [], totalAmount: 0 };
    }
    return defaultCartState;
};

export const CartProvider = (props: any) => {
    const [clCart, setClCart] = useState(false);
    const [isInitiallyFetched, setIsInitiallyFetched] = useState(false);
    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);
    const addItemToCartHandler = (item: any) => {
        dispatchCart({ type: "ADD", item: item });
    };
    const removeItemFromCartHandler = (id: any) => {
        dispatchCart({ type: "REMOVE", id: id });
    };

    const clearCartHandler = () => {
        setClCart(true);
        dispatchCart({ type: "CLEAR" });
    };

    useEffect(() => {
        let prev_items = JSON.parse(localStorage.getItem("cart")) || [];
        cartState.items = prev_items;
        let prev_price = JSON.parse(localStorage.getItem("price")) || 0;
        console.log(prev_price);
        cartState.totalAmount = prev_price;
        setIsInitiallyFetched(true);
    }, []);

    useEffect(() => {
        if (isInitiallyFetched) {
            localStorage.setItem("cart", JSON.stringify(cartState.items));
            localStorage.setItem(
                "price",
                JSON.stringify(cartState.totalAmount)
            );
        }
    }, [cartState.items, isInitiallyFetched, cartState.totalAmount]);

    if (clCart) {
        localStorage.removeItem("cart");
        localStorage.setItem("price", 0);
        setClCart(false);
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        clearCart: clearCartHandler,
    };
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};
