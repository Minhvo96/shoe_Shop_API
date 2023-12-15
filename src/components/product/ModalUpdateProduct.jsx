import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


const ModalUpdateProduct = ({ show, handleCloseModalUpdate, product, handleUpdateProducts, data }) => {
    const [newProduct, setNewProduct] = useState({});

    const handleChangeProduct = (e) => {
        if (Object.keys(newProduct).length) {
            setNewProduct({
                ...newProduct,
                [e.target.name]: e.target.value
            });
        } else {
            setNewProduct({
                ...product,
                [e.target.name]: e.target.value
            });
        }
        handleUpdateProducts(newProduct);
    }

    const handleUpdateAndAlert = () => {
        alert('Edit Product successfully');
        handleUpdateProducts(newProduct);
        handleCloseModalUpdate();
    }

    return (
        <Modal show={show} onHide={handleCloseModalUpdate} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Update</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form action="">
                    <div className="row">
                        <div className="col-lg-6">
                            <label htmlFor="">Title</label>
                            <input type="text" name="title" className="form-control" defaultValue={product.title} onChange={handleChangeProduct} />
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="">Company</label>
                            <select name="company"
                                className="form-control"
                                defaultValue={product.company}
                                onChange={handleChangeProduct}>
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
                            <input type="text" name="prevPrice" className="form-control" defaultValue={product.prevPrice} onChange={handleChangeProduct} />
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="">New Price</label>
                            <input type="text" name="newPrice" className="form-control" defaultValue={product.newPrice} onChange={handleChangeProduct} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <label htmlFor="">Color</label>
                            <select name="color"
                                className="form-control"
                                defaultValue={product.color}
                                onChange={handleChangeProduct}>
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
                                defaultValue={product.category}
                                onChange={handleChangeProduct}>
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
                            <input type="text" name="img" className="form-control" defaultValue={product.img} onChange={handleChangeProduct} />
                        </div>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModalUpdate}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => handleUpdateAndAlert()}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalUpdateProduct;