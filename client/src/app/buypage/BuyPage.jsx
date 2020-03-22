import React from 'react';


const BuyPage = (props) => {
    let product = props.selectedProduct

    console.log("buypage product", product)

    return (
        <div>
            {product.name}
        </div>
    )
}


export default BuyPage;
