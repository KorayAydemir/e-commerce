import { SiteContext } from "@components/contexts/SiteContext";
import Link from "next/link";
import { useContext, useState } from "react";

const dummyCategories = [
    {
        title: "New & Featured",
    },
    {
        title: "Men",
    },
    {
        title: "Women",
    },
    {
        title: "Kids",
    },
];

export const HeaderNav = ({ isNavHidden }: { isNavHidden: string }) => {
    const [activeCategoryId, setActiveCategoryId] = useState<string | null>(
        null
    );
    const siteData = useContext(SiteContext);

    const navigationHandler = (title: any) => {
        setActiveCategoryId((prev) => (prev === title ? null : title));
    };

    const subCategories = siteData?.headerData
        ?.slice(0)
        .map((category: string) => {
            return (
                <li className={`flex flex-col items-center`} key={category}>
                    <Link href={`/category`}>{category}</Link>
                </li>
            );
        });

    const categories = dummyCategories.map((category) => {
        const areSubCatsHidden =
            activeCategoryId === category.title ? "block" : "hidden";
        return (
            <>
                <li
                    onClick={() => navigationHandler(category.title)}
                    className="relative bg-slate-950 transition-all py-4"
                    key={category.title}
                >
                    <button className="w-full block ">{category.title}</button>
                </li>
                <li className={`${areSubCatsHidden} transition-all`}>
                    <ul>{subCategories}</ul>
                </li>
            </>
        );
    });

    return (
        <>
            <nav
                className={`w-full max-h-full bg-[#141416] ${isNavHidden} transition-all duration-500 ease-in-out lg:hidden absolute drop-shadow-lg z-20
                    drop-shadow-[0px_-25px_45px_grey]
                `}
            >
                <menu className="flex flex-col text-white ">{categories}</menu>
            </nav>
        </>
    );
};
