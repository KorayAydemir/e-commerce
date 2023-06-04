import Image from "next/image";

export const Products = ({ productsData }: any) => {
    const products = productsData?.products.map((product: any) => {
        return (
            <div className="flex flex-col justify-self-center" key={product.id}>
                <div className="bg-black w-[14rem] h-[10rem] flex items-center justify-center">
                    <Image
                        src="/images/ow_logo.svg"
                        alt="logo"
                        width={86}
                        height={26}
                    />
                </div>
                <span className="text-red-400">Just In</span>
                <span className="text-white font-bold">{product.title}</span>
                <span className="text-gray-500 text-sm">
                    {product.category}
                </span>
            </div>
        );
    });
    return (
        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products}
        </div>
    );
};
