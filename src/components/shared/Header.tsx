import SiteSearch from "@components/components/home/SiteSearch";
import { SiteContext } from "@components/contexts/SiteContext";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { FaHeart, FaShoppingBag } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { HeaderNav } from "./HeaderNav";
import { Backdrop } from "./Backdrop";

//import { Inter } from 'next/font/google'
//const inter = Inter({ subsets: ['latin'] })

export const Header = () => {
    const [isNavHidden, setIsNavHidden] = useState("-translate-y-full");

    const navigationHandler = () => {
        setIsNavHidden((prev) =>
            prev === "-translate-y-full" ? "translate-y-0" : "-translate-y-full"
        );
    };

    return (
        <>
            <header className="flex flex-row justify-around h-14 items-center bg-[#0f0f0f] z-30  relative">
                <div>
                    <div className="flex flex-row ">
                        <Image
                            src="/images/ow_logo.svg"
                            alt="logo"
                            width={26}
                            height={26}
                        />
                        <span className="ml-1 hidden md:block">OVERWATCH</span>
                    </div>
                </div>

                <SiteSearch />
                <div className="flex flex-row">
                    <div>
                        <FaHeart className="block my-auto h-full text-xl text-white" />
                    </div>
                    <div className="ml-2">
                        <FaShoppingBag className="block my-auto h-full text-xl text-white" />
                    </div>
                    <button className="ml-2" onClick={navigationHandler}>
                        <GiHamburgerMenu className="block my-auto h-full text-xl text-white" />
                    </button>
                </div>
            </header>
            <Backdrop
                show={isNavHidden === "translate-y-0"}
                onClickAction={() => setIsNavHidden("-translate-y-full")}
            />
            <HeaderNav isNavHidden={isNavHidden} />
        </>
    );
};
