const CartItem = (props) => {
    const price = props.price;

    return (
        <li className="mt-5">
            <div>
                <h2>{props.name}</h2>
                <div className="flex justify-between">
                    <span>{price} TL</span>
                    <span>Amount: {props.amount}</span>
                </div>
            </div>
            <div className="mt-2">
                <button
                    className="bg-green-800 px-2 border-2 rounded-md font-bold mr-4"
                    onClick={props.onRemove}
                >
                    −
                </button>
                <button
                    className="bg-red-800 px-2 border-2 rounded-md font-bold"
                    onClick={props.onAdd}
                >
                    +
                </button>
            </div>
        </li>
    );
};

export default CartItem;
