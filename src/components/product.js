import React from "react";
import {Layer, Rect, Stage, Group, Image} from 'react-konva';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            image: null
        };
    }

    handleClick(e) {
        return this.props.handleCanvasClick(e, this.props.productId, this.props.productUrl);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.productUrl !== nextProps.productUrl) {
            console.log(nextProps.productUrl);
            const image = new window.Image();
            image.src = nextProps.productUrl;

            image.onload = () => {
                this.setState({
                    image: image
                });
            }
        }
    }

    componentDidMount() {
        const image = new window.Image();
        image.src = this.props.productUrl;

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