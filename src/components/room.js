import React from 'react';
import {Layer,Stage} from 'react-konva';
import Product from "./product";

class Room extends React.Component {

    render() {
        let products = this.props.products.map((product) =>
            <Product
                key={product.id}
                productId={product.id}
                productUrl={product.id === this.props.selectedProductId ? this.props.selectedProductUrl : product.url}
                x={calculateCanvasPercentage(product.left)}
                y={calculateCanvasPercentage(product.top)}
                width={calculateCanvasPercentage(product.width)}
                height={calculateCanvasPercentage(product.height)}
                handleCanvasClick={this.props.handleCanvasClick}
            />
        );
        return (
            <div>
                <img className="room-image" src={this.props.roomPhoto}/>
                <Stage width={1080} height={1080}>
                    <Layer>
                    {products}
                    </Layer>
                </Stage>
            </div>
        )
    }
}

function calculateCanvasPercentage(percent){
    return percent*1080/100;
}

export default Room