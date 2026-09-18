import { BsCart4 } from "react-icons/bs";

export const Cart = () => {
    const cartItems = [
        { id: 101, name: 'Pen' },
        { id: 102, name: 'Copy' },
        { id: 103, name: 'Pen' }
    ];

    return (
        <div>
            <h1>Cart <BsCart4 /></h1>
                {cartItems.length > 0 && <h2>You have {cartItems.length} items in your cart.</h2>}

                <h4>Products : </h4>
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            <hr/>
        </div>
    )
}

export default Cart;