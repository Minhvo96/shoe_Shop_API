import React, { useEffect, useState } from "react";

const CreateProduct = ({ data, setData }) => {
    const [product, setProduct] = useState({});

    const [maxId, setMaxId] = useState(0);

    const products = data.products;

    const handleChangeProduct = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    };

    const handleCreate = () => {
        const products = data.products;
        products.push(product);

        setData({
            ...data,
            products: products
        })

        alert('Add new product successfully!');

        handleClear();
        handleChangeMaxId();
    }

    const handleChangeMaxId = () => {
        let currentId = 0;
        products.map(item => {
            if (item.id > currentId) {
                currentId = item.id;
            }
        })
        setMaxId(currentId);
    }

    const handleClear = () => {
        setProduct({
            // ...product,
            title: "",
            company: "",
            prevPrice: "",
            newPrice: "",
            color: "",
            category: "",
            img: ""
        })
    }

    useEffect(() => {
        handleChangeMaxId();
    }, [])

    useEffect(() => {
        setProduct({
            ...product,
            id: maxId + 1
        })
    }, [maxId]);

    return (
        <>
            <h2>Create new Product</h2>
            <form action="">
                <div className="row">
                    <div className="col-lg-6">
                        <label htmlFor="">Title</label>
                        <input type="text" name="title" value={product.title} className="form-control" onChange={handleChangeProduct} />
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="">Company</label>
                        <select name="company"
                            className="form-control"
                            value={product.company}
                            onChange={handleChangeProduct}>
                            <option disabled>--- Please choose one ---</option>
                            {
                                (data.companies).map((company) => (
                                    <option key={company.id} >{company.title}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <label htmlFor="">Prev Price</label>
                        <input type="text" name="prevPrice" value={product.prevPrice} className="form-control" onChange={handleChangeProduct} />
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="">New Price</label>
                        <input type="text" name="newPrice" value={product.newPrice} className="form-control" onChange={handleChangeProduct} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <label htmlFor="">Color</label>
                        <select name="color"
                            className="form-control"
                            value={product.color}
                            onChange={handleChangeProduct}>
                            <option disabled>--- Please choose one ---</option>
                            {
                                (data.colors).map((color) => (
                                    <option key={color.id} >{color.title}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="">Category</label>
                        <select name="category"
                            className="form-control"
                            value={product.category}
                            onChange={handleChangeProduct}>
                            <option disabled>--- Please choose one ---</option>
                            {
                                (data.categories).map((category) => (
                                    <option key={category.id} >{category.title}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <label htmlFor="">Image</label>
                        <input type="text" name="img" value={product.img} className="form-control" onChange={handleChangeProduct} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 mt-4">
                        <button type="button" className="btn btn-outline-primary" onClick={() => handleCreate()}><i className="fa-solid fa-square-plus"></i> Add new Product</button>
                        <button type="button" className="btn btn-outline-secondary ms-3" onClick={() => handleClear()}><i className="fa-solid fa-xmark"></i> Clear</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default CreateProduct;