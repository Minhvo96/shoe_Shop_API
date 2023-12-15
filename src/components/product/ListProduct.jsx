import React, { useEffect, useState } from "react";
import ModalUpdateProduct from "./ModalUpdateProduct";


const ListProduct = ({ data, setData }) => {
    const [showModalUpdate, setShowModalUpdate] = useState(false);

    const [products, setProducts] = useState(data.products);
    const [product, setProduct] = useState({});

    const handleUpdateProducts = (obj) => {
        const index = products.findIndex(item => item.id === obj.id);
        const newProducts = [...products];

        newProducts[index] = obj;

        setProducts(newProducts);

        const newData = { ...data, products: newProducts };
        setData(newData);
    }

    const handleShowModalUpdate = (id) => {
        const product = findById(id);

        if (Object.keys(product).length) {
            setProduct(product);
            setShowModalUpdate(true);
        } else {
            alert('Cant find product with id: ' + id);
        }
    }

    const handleDelete = (id) => {
        const confirmDeleted = window.confirm('Are you sure delete product ' + id);

        if (confirmDeleted) {
            const index = products.findIndex(item => item.id === id);

            const newProducts = [...products];

            newProducts.splice(index, 1);

            setProducts(newProducts);

            const newData = { ...data, products: newProducts };
            setData(newData);
        } else {
            alert('Cant find product with that ID');
        }
    }

    const handleCloseModalUpdate = () => {
        setShowModalUpdate(false);
    }

    const findById = (id) => {
        return products.find(item => item.id === id);
    }

    const sortProducts = array => {
        array.sort((a, b) => { return b.id - a.id });
        return array;
    }

    useEffect(() => {
        let newProducts = [...products];
        const reverseProducts = sortProducts(newProducts);
        setProducts(reverseProducts);
    }, [])



    return (
        <>
            <div id="product">
                <h3>Products</h3>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Avatar</th>
                            <th>Title</th>
                            <th>Prev Price</th>
                            <th>New Price</th>
                            <th>Company</th>
                            <th>Color</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(shoe => {
                                return (
                                    <tr key={shoe.id}>
                                        <td>
                                            {shoe.id}
                                        </td>
                                        <td>
                                            <img src={shoe.img} className="card-img-top" alt="..." style={{ height: 45, width: 85 }} />
                                        </td>
                                        <td>
                                            {shoe.title}
                                        </td>
                                        <td>
                                            {shoe.prevPrice}
                                        </td>
                                        <td>
                                            {shoe.newPrice}
                                        </td>
                                        <td>
                                            {shoe.company}
                                        </td>
                                        <td>
                                            {shoe.color}
                                        </td>
                                        <td>
                                            {shoe.category}
                                        </td>
                                        <td>
                                            <i className="fas fa-edit me-2" onClick={() => handleShowModalUpdate(shoe.id)}></i>
                                            <i className="fa-solid fa-trash" onClick={() => handleDelete(shoe.id)}></i>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <ModalUpdateProduct show={showModalUpdate} handleCloseModalUpdate={handleCloseModalUpdate} product={product} handleUpdateProducts={handleUpdateProducts} data={data} />
        </>
    )
}

export default ListProduct;