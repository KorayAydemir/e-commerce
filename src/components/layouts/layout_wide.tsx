import { ReactNode } from "react";
interface Props {
    children: ReactNode;
}
export default function WideLayout({ children }: Props) {
    return (
        <div className="mx-auto lg:max-w-[1590px] sm:max-w-[700px] px-4 pb-8">
            {children}
        </div>
    );
}
