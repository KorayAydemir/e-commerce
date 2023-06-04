import { ReactNode } from "react";
interface Props {
    children: ReactNode;
}
export default function WideLayout({ children }: Props) {
    return (
        <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-[1720px] xl:px-0 pb-8">
            {children}
        </div>
    );
}
