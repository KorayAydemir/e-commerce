import { CartContext } from "@components/contexts/CartContext";
import { useContext, useState } from "react";
import CartItem from "./CartItem";
import Modal from "./Modal";

export const Cart = (props) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
    const cartCtx = useContext(CartContext);
    const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
    const [isCheckout, setIsCheckout] = useState(false);
    const [postReqError, setPostReqError] = useState();
    const [cartPromptOpen, setCartPromptOpen] = useState(false);

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };
    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const orderHandler = () => {
        setIsCheckout(true);
    };

    const submitOrderHandler = async (userData) => {
        setIsSubmitting(true);
        try {
            if (true) {
                throw new Error("Bir şeyler ters gitti.");
            }
        } catch (error) {
            setIsSubmitting(false);
            setPostReqError(error.message);
        }

        setIsSubmitting(false);
        setDidSubmit(true);
        cartCtx.clearCart();
        console.log("a");
    };

    const cartItems = (
        <ul>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)} // {()=> cartItemRemoveHandler(item.id)} is the literal same thing. if you do just function() it calls the function directly so you dont want that
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );

    const clearCartHandler = () => {
        cartCtx.clearCart();
        setCartPromptOpen(false);
    };

    const modalActions = (
        <div className="flex justify-between mt-4">
            {hasItems && (
                <button
                    className="bg-red-800 p-3 rounded-md"
                    onClick={() => {
                        setCartPromptOpen(true);
                    }}
                >
                    Sepeti Boşalt
                </button>
            )}
            <div>
                <button
                    className="bg-red-800 p-3 mr-6 rounded-md"
                    onClick={props.onClose}
                >
                    Kapat
                </button>
                {hasItems && (
                    <button
                        className="bg-green-800 p-3 rounded-md"
                        onClick={orderHandler}
                    >
                        Satın Al
                    </button>
                )}
            </div>
        </div>
    );

    const cartModalContent = (
        <div className="px-10 pb-6">
            {cartItems}
            <div className="flex justify-between bg-black p-3 rounded-lg mt-4">
                <span>Toplam Fiyat</span>
                <span>{totalAmount}</span>
            </div>

            {!isCheckout && modalActions}
            <div>{postReqError}</div>
        </div>
    );

    const isSubmittingModalContent = <p>Siparişiniz Gönderiliyor...</p>;

    const didSubmitModalContent = <p>Siparişiniz Başarıyla Gönderildi!</p>;

    return (
        <Modal onClose={props.onClose}>
            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && isSubmittingModalContent}
            {!isSubmitting && didSubmit && didSubmitModalContent}
        </Modal>
    );
};
