import { MouseEventHandler } from "react";

export const Backdrop = ({
    show,
    onClickAction,
}: {
    show: boolean;
    onClickAction: MouseEventHandler<HTMLDivElement>;
}) => {
    console.log(show);
    return show ? (
        <div
            className="fixed inset-0 bg-black opacity-50 z-10"
            onClick={onClickAction}
        ></div>
    ) : null;
};
