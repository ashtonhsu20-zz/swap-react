import React from "react";
import {Image} from 'react-konva';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            image: null
        };
    }

    handleClick(e) {
        return this.props.handleCanvasClick(e, this.props.productId, this.state.image.src);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.selectedProductUrl !== nextProps.selectedProductUrl
            // && this.props.selectedProductId === nextProps.selectedProductId
            && this.props.productId === nextProps.selectedProductId) {
            return this.loadImage(nextProps.selectedProductUrl);
        }
    }

    componentDidMount() {
        return this.loadImage(this.props.productUrl);
    }

    loadImage(url){
        const image = new window.Image();
        image.src = url;

        image.onload = () => {
            this.setState({
                image: image
            });
        }
    }

    render() {
        return (
            <Image
                onClick={this.handleClick}
                image={this.state.image}
                x={this.props.x}
                y={this.props.y}
                width={this.props.width}
                height={this.props.height}
            />
        )
    }
}

export default Product