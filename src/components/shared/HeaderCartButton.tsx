import { CartContext } from "@components/contexts/CartContext";
import { useContext, useEffect, useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { Cart } from "./Cart";
import { Backdrop } from "./Backdrop";

export const HeaderCartButton = () => {
    const [shouldBounce, setShouldBounce] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const cartCtx = useContext(CartContext);
    const numberOfItemsInCart = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnBounce = shouldBounce
        ? "animate-bump drop-shadow-[0px_0px_10px_cyan]"
        : "";

    useEffect(() => {
        if (cartCtx.items.length === 0) {
            return;
        }
        setShouldBounce(true);

        const timer = setTimeout(() => {
            setShouldBounce(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [cartCtx.items]);

    return (
        <>
            {showModal && <Cart />}
            {
                <Backdrop
                    show={showModal}
                    onClickAction={() => setShowModal(false)}
                />
            }
            <div
                className={`ml-2 flex items-center justify-between bg-[#9b3b2f4f]
        px-2 w-[4.5rem] py-1 rounded-md  ${btnBounce}
        `}
                onClick={() => {
                    setShowModal(true);
                }}
            >
                <FaShoppingBag
                    className={`inline my-auto h-full text-xl text-white`}
                />
                <span className="text-white font-bold">
                    {numberOfItemsInCart}
                </span>
            </div>
        </>
    );
};
