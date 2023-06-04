export const Backdrop = ({ show, onClickAction }) => {
    console.log(show);
    return show ? (
        <div
            className="fixed inset-0 bg-black opacity-50 z-10"
            onClick={onClickAction}
        ></div>
    ) : null;
};
