import {
    connect
} from 'react-redux'

import SingleProductPage from './SingleProductPage'
import {
    productOperations
} from '../frontpage/productReducer/'

const mapStateToProps = state => {
    const {
        pending_products,
        selectedProduct
    } = state.products
    const {
        token,
        role
    } = state.signIn
    return {
        selectedProduct,
        pending_products,
        token,
        role
    }
}


const mapDispatchToProps = {
    updateProductStatus: productOperations.updateProductStatus,
    deleteProduct: productOperations.deleteProduct,
    setSelected: productOperations.setSelectedProduct
}

const SingleProductPageContainer = connect(mapStateToProps, mapDispatchToProps)(SingleProductPage)


export default SingleProductPageContainer