import React from "react";
import {Layer, Rect, Stage, Group, Image} from 'react-konva';

class Product extends React.Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            image: null
        };
    }

    handleClick(e) {
        // console.log(this.img.getContext())

        return this.props.handleCanvasClick(e, this.props.productId, this.props.productUrl, this.img);
    }

    componentDidMount() {

        const image = new window.Image();
        image.src = this.props.productUrl;
        // image.crossOrigin = "Anonymous";

        image.onload = () => {
            this.setState({
                image: image
            }, () => this.img.cache());
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
                    ref={(node) => {this.img = node;}}
                />
        )
    }
}

export default Product