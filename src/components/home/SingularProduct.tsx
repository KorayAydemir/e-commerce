import Image from "next/image";

export const SingularProduct = ({ product }: any) => {
    return (
        <div className="flex flex-col justify-self-center w-[14rem] xl:w-[20rem] ">
            <div className="bg-black w-full h-[12rem] flex items-center justify-center">
                <Image
                    src="/images/ow_logo.svg"
                    alt="logo"
                    width={86}
                    height={26}
                />
            </div>
            <span className="text-red-400">Just In</span>
            <span className="text-white font-bold">{product.title}</span>
            <span className="text-slate-200 text-sm">{product.category}</span>
        </div>
    );
};
