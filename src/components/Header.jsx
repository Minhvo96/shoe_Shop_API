import React, { useState } from "react";
import '../components/header.css';
import data from "../data/products.json";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="container d-flex header">
            <div className="col-md-3 d-flex">
                <i className="fa-solid fa-cart-shopping me-2"></i>
                <h5>Shoes Ecommerce</h5>
            </div>
            <div className="col-md-5">
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Enter your search shoes" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            <div className="col-md-4 icon d-flex">
                <div className="dropdown">
                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fa-solid fa-user"></i>
                    </a>

                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><Link className="dropdown-item" to="/dashboard">Dashboard</Link></li>
                        <li><Link className="dropdown-item" to="/">Back to Home</Link></li>
                        <li><Link className="dropdown-item" to="#">Logout</Link></li>
                    </ul>
                </div>
                <i className="fa-regular fa-heart"></i>
                <i className="fa-solid fa-cart-arrow-down"></i>

            </div>
        </div>
    )
}
export default Header;