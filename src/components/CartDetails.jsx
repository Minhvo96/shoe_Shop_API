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
            if (item) {
                newData.push(item);
            }
        }
        setCartListDetails(newData)
    }


    const loadData = async () => {
        await getAllCarts();
        await cartLists();
    }
    useEffect(() => {
        loadData()
    }, [])

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
                                        {/* <td>
                                        {item.quantity}
                                    </td> */}
                                        <td>
                                            <i className="fas fa-edit me-2"></i>
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