import React from 'react';
import apiService from '../services/api.js';
import Room from '../components/room.js';
import SideBar from '../components/side-bar.js';

class Swap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleProductChange = this.handleProductChange.bind(this);
        this.handleCanvasClick = this.handleCanvasClick.bind(this);
    }

    componentWillMount() {
        apiService.getData
            .then((result) => {
                let products = result.products.sort(function (a, b) {
                    if (a.index < b.index) return -1;
                    if (a.index > b.index) return 1;
                    return 0;
                });

                this.setState({
                    roomType: result.room_type,
                    roomPhoto: result.room_photo,
                    products: products,
                    similarProducts: [],
                });
            })
    }

    handleProductChange(id, productUrl) {
        let selectedProduct;
        let similarProducts = [];
        for (let i = 0; i < this.state.products.length; i++) {
            if (this.state.products[i].id === id) {
                selectedProduct = this.state.products[i];
                similarProducts = selectedProduct.similar_producs.slice();
            }
        }

        if (similarProducts.length > 0) {
            similarProducts.push({
                url: selectedProduct.url,
                price: selectedProduct.price,
            });
        }

        this.setState({
            selectedProductId: id,
            selectedProductUrl: productUrl,
            selectedProductType: selectedProduct.type,
            similarProducts: similarProducts
        });
    }

    handleCanvasClick(event, id, productUrl, img) {
        if (clickedTransparent(event)) {
            return;
        }

        let selectedProduct;
        let similarProducts = [];
        for (let i = 0; i < this.state.products.length; i++) {
            if (this.state.products[i].id === id) {
                selectedProduct = this.state.products[i];
                similarProducts = selectedProduct.similar_producs.slice();
            }
        }

        if (similarProducts.length > 0) {
            similarProducts.push({
                url: selectedProduct.url,
                price: selectedProduct.price,
            });
        }

        this.setState({
            selectedProductId: id,
            selectedProductUrl: productUrl,
            selectedProductType: selectedProduct.type,
            similarProducts: similarProducts
        }, () => {
            img.cache();
        });
    }

    render() {
        if (!this.state.products) {
            return (
                <h1>Unable to get products</h1>
            )
        }
        return (
            <div className='swap-app'>
                <Room products={this.state.products}
                      roomType={this.state.roomType}
                      roomPhoto={this.state.roomPhoto}
                      selectedProductId={this.state.selectedProductId}
                      selectedProductUrl={this.state.selectedProductUrl}
                      handleCanvasClick={this.handleCanvasClick}
                />
                <SideBar className="side-bar"
                         type={this.state.selectedProductType}
                         similarProducts={this.state.similarProducts}
                         selectedProductType={this.state.selectedProductType}
                         selectedProductUrl={this.state.selectedProductUrl}
                         selectedProductId={this.state.selectedProductId}
                         handleProductChange={this.handleProductChange}
                />
            </div>
        );
    }
}

function clickedTransparent(event) {
    // let ctx = document.createElement("canvas").getContext("2d");
    // let x = event.pageX - this.offsetLeft,
    //     y = event.pageY - this.offsetTop,
    //     w = ctx.canvas.width = this.width,
    //     h = ctx.canvas.height = this.height,
    //     alpha;
    //
    // // Draw image to canvas
    // // and read Alpha channel value
    // ctx.drawImage(this, 0, 0, w, h);
    // alpha = ctx.getImageData(x, y, 1, 1).data[3]; // [0]R [1]G [2]B [3]A
    //
    // // If pixel is transparent,
    // // retrieve the element underneath and trigger it's click event
    // if( alpha===0 ) {
    //     console.log("WHITE space");
    // } else {
    //     console.log("LOGO clicked!");
    // }

    let ctx = document.getElementsByTagName("canvas")[0].getContext("2d");

    let alpha = ctx.getImageData(event.pageX, event.pageY, 1, 1).data[3]; // [0]R [1]G [2]B [3]A

    // If pixel is transparent,
    // retrieve the element underneath and trigger it's click event
    if (alpha === 0) {
        console.log("WHITE space");
    } else {
        console.log("LOGO clicked!");
    }

}

export default Swap;
