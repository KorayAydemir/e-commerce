import Image from "next/image";

export const SingularProduct = ({ product }: any) => {
    return (
        <div className="flex flex-col justify-self-center w-[14rem]">
            <div className="bg-black w-full h-[10rem] flex items-center justify-center">
                <Image
                    src="/images/ow_logo.svg"
                    alt="logo"
                    width={86}
                    height={26}
                />
            </div>
            <span className="text-red-400">Just In</span>
            <span className="text-white font-bold">{product.title}</span>
            <span className="text-gray-500 text-sm">{product.category}</span>
        </div>
    );
};
