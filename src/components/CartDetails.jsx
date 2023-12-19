import React, { useEffect, useState } from "react";
import cartService from "../services/cartService";
import productService from "../services/productService";
import billService from "../services/billService";
import { toast } from "react-toastify";
import '../components/CartDetails.css';

const CartDetails = ({ cart, setCart, setStatusCart }) => {
    const [cartListDetails, setCartListDetails] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [customer, setCustomer] = useState({});

    const getAllCarts = async () => {
        const listCarts = await cartService.getAllCarts();
        setCart(listCarts);
    }

    const cartLists = async () => {
        const newData = [];
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            const item = await productService.getById(cart[i].id);
            const product = { ...item, quantity: cart[i].quantity }
            if (item) {
                newData.push(product);
            }
            total += parseInt(item.newPrice) * parseInt(cart[i].quantity);
        }
        setCartListDetails(newData);
        setTotalPrice(total);
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

    const handleRemoveProductInCart = async (id) => {
        const confirmDeleted = window.confirm('Are you sure delete product ' + id + ' ?');

        if (confirmDeleted) {

            await cartService.deleteCart(id);

            const index = cartListDetails.findIndex(item => item.id === id);

            const newCarts = [...cartListDetails];

            newCarts.splice(index, 1);

            setCartListDetails(newCarts);
            setStatusCart(true);

            toast.warn(`Deleted product with ID: ${id} from cart`, {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }

    const handleDecreaseQuantity = async (id, quantity) => {
        if (quantity > 1) {
            const currentProductInCart = await cartService.getById(id);

            const newProductInCart = { ...currentProductInCart };
            newProductInCart.quantity = newProductInCart.quantity - 1;

            const index = cart.findIndex(item => item.id === newProductInCart.id);
            const newCart = [...cart];

            newCart[index] = newProductInCart;

            await cartService.editCart(id, newProductInCart);
            setCart(newCart);

            toast.success(`Updated quantity for product with ID: ${id}`, {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }

    const handleIncreaseQuantity = async (id, quantity) => {
        const currentProductInCart = await cartService.getById(id);

        const newProductInCart = { ...currentProductInCart };
        newProductInCart.quantity = newProductInCart.quantity + 1;

        const index = cart.findIndex(item => item.id === newProductInCart.id);
        const newCart = [...cart];

        newCart[index] = newProductInCart;

        await cartService.editCart(id, newProductInCart);
        setCart(newCart);

        toast.success(`Updated quantity for product with ID: ${id}`, {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    const handleChangeInfo = (e) => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        })
    }

    const handleCreateBill = async () => {
        const newBill = {
            "cartListDetails": cartListDetails,
            "customer": customer,
            "totalPrice": totalPrice
        }

        await billService.createBill(newBill);

        setCart([]);

        toast.success(`Create bill successfully`, {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    return (
        <>
            <div id="product">
                <h3>Cart Details</h3>
                <div className="d-flex">
                    <table className="table table-hover">
                        <thead>
                            <tr className="text-center">
                                <th>ID</th>
                                <th>Avatar</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total Amount</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
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
                                            <div className="cart-quantity-wrap">
                                                <div className="cart-quantity">
                                                    <span onClick={() => handleDecreaseQuantity(item.id, item.quantity)}>-</span>
                                                    {item.quantity}
                                                    <span onClick={() => handleIncreaseQuantity(item.id, item.quantity)}>+</span>
                                                </div>
                                            </div>
                                            <td>
                                                {parseInt(item.quantity) * parseInt(item.newPrice)}
                                            </td>
                                            <td>
                                                <i className="fa-solid fa-trash" onClick={() => handleRemoveProductInCart(item.id)} ></i>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <div className="col-3">
                        <div className="order-summary p-3">
                            <h3 className="border-bottom py-2">Order Summary</h3>
                            <div className="d-flex flex-column">
                                <div className="d-flex align-items-center justify-content-between py-2">
                                    <span>Subtotal</span>
                                    <span className="fw-bolder">${totalPrice}</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between py-2">
                                    <span>Shipping</span>
                                    <span className="fw-bolder">Free</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border-top mt-2 py-2">
                                <span className="fs-6">Total</span>
                                <span className="fw-bolder fs-6">${totalPrice}</span>
                            </div>
                        </div>
                        <form action="">
                            <h3>Customer Info</h3>
                            <div className='form-group mb-3'>
                                <label className='form-label'>FullName</label>
                                <input required type="text" name="fullname" id="" className='form-control' placeholder='Fullname'
                                value={customer.fullname}
                                onChange={handleChangeInfo}
                                />
                                <span className='invalid-feedback'></span>
                            </div>
                            <div className='form-group mb-3'>
                                <label className='form-label'>Address</label>
                                <input required type="text" name="address" id="" className='form-control' placeholder='Address'
                                value={customer.address}
                                onChange={handleChangeInfo}
                                />
                                <span className='invalid-feedback'></span>
                            </div>
                            <div className='form-group mb-3'>
                                <label className='form-label'>Email</label>
                                <input required type="email" name="email" id="" className='form-control' placeholder='Email'
                                value={customer.email}
                                onChange={handleChangeInfo}
                                />
                                <span className='invalid-feedback'></span>
                            </div>
                            <div className='form-group mb-3'>
                                <label className='form-label'>Mobile</label>
                                <input required type="tel" name="mobile" id="" className='form-control' placeholder='Mobile'
                                value={customer.mobile}
                                onChange={handleChangeInfo}
                                />
                                <span className='invalid-feedback'></span>
                            </div>
                            <div className="py-3 bg-success mt-2 d-flex align-items-center justify-content-center text-white btn-checkout">
                                <button className='btn btn-block' type='button' onClick={handleCreateBill}>CHECKOUT</button>                               
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartDetails;