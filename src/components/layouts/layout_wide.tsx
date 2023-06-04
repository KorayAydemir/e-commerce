import { ReactNode } from "react";
interface Props {
    children: ReactNode;
}
export default function WideLayout({ children }: Props) {
    return (
        <div className="mx-auto max-w-3xl px-4 lg:max-w-[1200px] xl:max-w-[1720px] pb-8">
            {children}
        </div>
    );
}
