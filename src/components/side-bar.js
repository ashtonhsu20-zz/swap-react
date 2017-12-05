import React from "react";

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(url) {
        return this.props.handleProductChange(this.props.selectedProductId, window.location.href + url);
    }

    render() {
        let products = this.props.similarProducts.map((product, index) =>
            <div
                className={"similar-product" + (this.props.selectedProductUrl === window.location.href + product.url ? ' similar-product--active' : '')}
                key={index}
                onClick={() => this.handleClick(product.url)}
            >
                <img src={product.url} alt={"product url"}/>
                <p>Price: {product.price}</p>
            </div>
        );

        return (
            <div className="side-bar">
                <h1>{this.props.selectedProductType}</h1>
                {products.length > 0 ? (
                    products
                ) : (
                    <h2> There are no similar products</h2>
                )}
            </div>
        );
    }
}

export default SideBar