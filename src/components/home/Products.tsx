import Image from "next/image";
import { SingularProduct } from "./SingularProduct";

export const Products = ({ productsData }: any) => {
    const uniqueProductCategories = new Set<string>();
    productsData?.products.forEach((product: any) => {
        uniqueProductCategories.add(product.category);
    });

    // using non unique one for now to show more categoires
    const procateg = productsData?.products.map((product: any) => {
        return product.category;
    });

    // const productsCategories = Array.from(uniqueProductCategories).map(
    //     (cat: string) => {
    //         return (
    //             <div key={cat} className="text-white">
    //                 {cat}
    //             </div>
    //         );
    //     }
    // );

    const productsCategories = procateg.map((cat: string) => {
        return (
            <div key={cat} className="text-white">
                {cat}
            </div>
        );
    });

    const products = productsData?.products.map((product: any) => {
        return <SingularProduct product={product} key={product.id} />;
    });

    const SideBar = (
        <div className="flex flex-col w-1/6 ml-auto px-2">
            <aside className="bg-slate-600 py-5">
                <div className="max-h-80 overflow-y-scroll">
                    {productsCategories}
                </div>
            </aside>
        </div>
    );

    return (
        <div className="flex flex-col">
            <div className="py-4  px-2">
                <h2 className="font-bold text-white text-xl mb-2 block">
                    New (500)
                </h2>
            </div>
            <div className="flex flex-row">
                {SideBar}
                <div className="flex-1 grid grid-cols-1 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 m-0">
                    {products}
                </div>
            </div>
        </div>
    );
};
