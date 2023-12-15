import React, { useEffect, useState } from "react";
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

    return (
        <>
            <div className="container">
                <Header />
                <div className="col-md-12 row mt-5">
                    <Routes>
                        <Route path="/" element={<SideBar data={data} />} />
                        <Route path="/dashboard" element={<DashboardLayout />}>
                            <Route path="" element={<Dashboard />} />
                            <Route path="products" element={<ListProduct data={data} setData={setData} />} />
                            <Route path="products/create" element={<CreateProduct data={data} setData={setData}/>} />
                        </Route>
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default ShoesRender;