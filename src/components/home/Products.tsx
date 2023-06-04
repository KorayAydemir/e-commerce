import Image from "next/image";
import { IoFilterSharp } from "react-icons/io5";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { SingularProduct } from "./SingularProduct";
import { useState } from "react";
import { Backdrop } from "../shared/Backdrop";

export const Products = ({ productsData }: any) => {
    const [filterState, setFilterState] = useState("hidden");

    const uniqueProductCategories = new Set<string>();
    productsData?.products.forEach((product: any) => {
        uniqueProductCategories.add(product.category);
    });

    const productsCategories = Array.from(uniqueProductCategories).map(
        (cat: string) => {
            return (
                <div key={cat} className="font-bold">
                    {cat}
                </div>
            );
        }
    );

    const products = productsData?.products.map((product: any) => {
        return <SingularProduct product={product} key={product.id} />;
    });

    const SideBar = (
        <aside
            className={`flex flex-col w-1/6 ml-auto px-2 text-white lg:block ${filterState}`}
        >
            <div className="max-h-80 overflow-y-scroll leading-loose">
                {productsCategories}
            </div>
            <div className="before:absolute before:-top-3 before:left-0 before:w-full before:h-[1px] before:bg-white relative mt-12 w-11/12">
                <div className="flex justify-between">
                    <h3 className="font-bold text-lg m-0">Gender</h3>
                    <RiArrowUpSLine className="my-auto text-xl" />
                </div>
            </div>
        </aside>
    );

    const filtersHandler = () => {
        setFilterState((prev) => (prev === "hidden" ? "block" : "hidden"));
    };

    return (
        <div className="flex flex-col">
            <div className="py-4 px-2 flex flex-row justify-between items-center">
                <h2 className="font-bold text-white text-xl mb-2 inline">
                    New (500)
                </h2>
                <div className="flex">
                    <div
                        className="flex flex-row inline mr-2"
                        onClick={filtersHandler}
                    >
                        <span className="text-white mr-1">Filters</span>
                        <IoFilterSharp className="text-white text-xl my-auto" />
                    </div>
                    <Backdrop
                        show={filterState === "block"}
                        onClickAction={() => {
                            setFilterState("hidden");
                            console.log("rrr");
                        }}
                    />
                    <div className="flex flex-row inline">
                        <span className="text-white mr-1">Sort By</span>
                        <RiArrowDownSLine className="text-white text-xl my-auto" />
                    </div>
                </div>
            </div>
            <div className="flex flex-row">
                {SideBar}
                <div className="flex-1 grid grid-cols-1 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 m-0">
                    {products}
                </div>
            </div>
        </div>
    );
};
