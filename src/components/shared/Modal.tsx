import { useEffect, useState } from "react";
import { Backdrop } from "./Backdrop";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const ModalOverlay = (props) => {
    return (
        <div
            className="fixed top-[5vh] mx-auto inset-x-0 sm:w-[600px] w-[450px] bg-slate-800 px-2 rounded-md 
        z-40 text-white overflow-y-scroll max-h-96"
        >
            <div>{props.children}</div>
        </div>
    );
};

const Modal = (props) => {
    return (
        <>
            <ModalOverlay>{props.children}</ModalOverlay>
        </>
    );
};
export default Modal;
