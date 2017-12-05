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

    handleCanvasClick(event, id, productUrl) {
        if (clickedTransparent(event)) {
            return;
        }

        return this.handleProductChange(id, productUrl)
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
    let ctx = document.getElementsByTagName("canvas")[0].getContext("2d");

    let alpha = ctx.getImageData(event.evt.pageX, event.evt.pageY, 1, 1).data[3];

    return alpha === 0
}

export default Swap;
