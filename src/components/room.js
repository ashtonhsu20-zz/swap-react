import React from "react";
import Product from "./product";

class Room extends React.Component {

    render() {
        let products = this.props.products.map((product)  =>
            <Product
                key={product.id}
                productId={product.id}
                productUrl={product.id === this.props.selectedProductId ? this.props.selectedProductUrl : product.url}
                handleProductChange={this.props.handleProductChange}
            />
        );
        return (
            <div>
                <h1>Room</h1>
                {products}
            </div>
        )
    }
}

export default Room