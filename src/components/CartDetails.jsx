import React, { useEffect, useState } from "react";
import cartService from "../services/cartService";
import productService from "../services/productService";


const CartDetails = ({ cart, setCart }) => {
    const [cartListDetails, setCartListDetails] = useState([]);


    const getAllCarts = async () => {
        const listCarts = await cartService.getAllCarts();
        setCart(listCarts);
    }

    const cartLists = async () => {
        const newData = []
        for (let i = 0; i < cart.length; i++) {
            const item = await productService.getById(cart[i].id);
            const product = { ...item, quantity: cart[i].quantity }
            if (item) {
                newData.push(product);
            }
        }
        setCartListDetails(newData)
    }


    const loadData = async () => {
        if (cart.length > 0) {
            await cartLists();
        } else {
            await getAllCarts();
            await cartLists();
        }
    }
    useEffect(() => {
        loadData();
    }, [cart])

    return (
        <>
            <div id="product">
                <h3>Cart Details</h3>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Avatar</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartListDetails.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <td>
                                            {item.id}
                                        </td>
                                        <td>
                                            <img src={item.img} className="card-img-top" alt="..." style={{ height: 45, width: 85 }} />
                                        </td>
                                        <td>
                                            {item.title}
                                        </td>
                                        <td>
                                            {item.newPrice}
                                        </td>
                                        <td>
                                            {item.quantity}
                                        </td>
                                        <td>
                                            {parseInt(item.quantity) * parseInt(item.newPrice)}
                                        </td>
                                        <td>
                                            <i className="fa-solid fa-trash" ></i>
                                        </td>
                                    </tr>
                                )

                            })
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default CartDetails;