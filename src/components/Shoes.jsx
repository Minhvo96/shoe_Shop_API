import React, { useState } from "react";
import Header from "./Header";
import { SideBar } from "./Body";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import ListProduct from "./product/ListProduct";
import DashboardLayout from "./DashboardLayout";
import CreateProduct from "./product/CreateProduct";
import dataProduct from "../data/products.json";

function ShoesRender() {
    const [data, setData] = useState(dataProduct);
    const [product, setProduct] = useState({
        quantity: 0,
        id: ""
    });
    const [cart, setCart] = useState([]);

    return (
        <>
            <div className="container">
                <Header cart={cart}/>
                <div className="col-md-12 row mt-5">
                    <Routes>
                        <Route path="/" element={<SideBar data={data} product={product} setProduct={setProduct} cart={cart} setCart={setCart} />} />
                        <Route path="/dashboard" element={<DashboardLayout />}>
                            <Route path="" element={<Dashboard />} />
                            <Route path="products" element={<ListProduct data={data} />} />
                            <Route path="products/create" element={<CreateProduct data={data} />} />
                        </Route>
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default ShoesRender;