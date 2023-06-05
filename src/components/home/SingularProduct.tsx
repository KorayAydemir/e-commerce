import { CartContext } from "@components/contexts/CartContext";
import Image from "next/image";
import { useContext } from "react";
import { MdAddShoppingCart } from "react-icons/md";

export const SingularProduct = ({ product }: any) => {
    const cartCtx = useContext(CartContext);
    const addToCartHandler = () => {
        cartCtx.addItem({
            id: product.id,
            name: product.title,
            price: product.price,
            amount: 1,
        });
    };
    console.log(cartCtx.items);

    return (
        <div
            className="flex flex-col justify-self-center w-[16rem]
        xl:w-[21rem] 2xl:w-[25rem] "
        >
            <div className="bg-black w-full h-[12rem] xl:h-[16rem] 2xl:h-[18rem] flex items-center justify-center relative group">
                <Image
                    src="/images/ow_logo.svg"
                    alt="logo"
                    width={86}
                    height={26}
                />
                <div
                    onClick={addToCartHandler}
                    className="text-white flex absolute bottom-6 right-6
                     bg-slate-800 p-2 rounded-md group-hover:flex hidden
                     hover:cursor-pointer hover:bg-slate-900 border-2 border-slate-800
                     "
                >
                    <span>Add to basket</span>
                    <MdAddShoppingCart className="my-auto ml-2 text-lg" />
                </div>
            </div>
            <span className="text-red-400">Just In</span>
            <span className="text-slate-100 font-bold">{product.title}</span>
            <span className="text-slate-200 text-sm">{product.category}</span>

            <span className="font-bold text-slate-100 mt-3">
                Price: {product.price}$
            </span>
        </div>
    );
};
