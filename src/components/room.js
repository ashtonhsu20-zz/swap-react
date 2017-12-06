import React from 'react';
import {Layer,Stage} from 'react-konva';
import Product from "./product";
import canvas from '../utilities/canvas';

class Room extends React.Component {

    render() {
        let products = this.props.products.map((product) =>
            <Product
                key={product.id}
                productId={product.id}
                selectedProductId={this.props.selectedProductId}
                productUrl={product.url}
                selectedProductUrl={this.props.selectedProductUrl}
                x={canvas.calculateCanvasPercentage(product.left)}
                y={canvas.calculateCanvasPercentage(product.top)}
                width={canvas.calculateCanvasPercentage(product.width)}
                height={canvas.calculateCanvasPercentage(product.height)}
                handleCanvasClick={this.props.handleCanvasClick}
            />
        );
        return (
            <div>
                <img className="room-image" src={this.props.roomPhoto} alt={"room url"}/>
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