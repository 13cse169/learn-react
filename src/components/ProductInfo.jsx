const ProductInfo = () => {
    const product = {
        name: "Laptop",
        price: 25000,
        available: "In Stock"
    };

    return <div>
        <h4>Product Name: {product.name}</h4>
        <h5>Price: {product.price}</h5>
        <hr />
    </div>
}

export default ProductInfo;