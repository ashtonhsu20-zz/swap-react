import React from "react";

class Product extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        return this.props.handleProductChange(this.props.productId,this.props.productUrl);
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <img src={this.props.productUrl}/>
            </div>
        )
    }
}

export default Product