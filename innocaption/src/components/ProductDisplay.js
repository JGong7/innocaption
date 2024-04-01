import React from 'react';

class ProductDisplay extends React.Component {
    constructor(props){
        super(props);
    }
    handleAddToCart = () => {
        console.log(`Added ${this.props.title} to cart`);
    }

    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
                <p>{this.props.price}</p>
                <button onClick={this.handleAddToCart}>Add to Cart</button>
            </div>
        );
    }
}
export default ProductDisplay;