import {
    connect
} from 'react-redux'

import BuyPage from './BuyPage'
import {
    productOperations
} from '../frontpage/productReducer/'

const mapStateToProps = state => {
    const {
        selectedProduct
    } = state.products
    const {
        ID,
        token,
        role
    } = state.signIn
    return {
        selectedProduct,
        token,
        role,
        ID
    }
}


const mapDispatchToProps = {
    updateProductStatus: productOperations.updateProductStatus,
    deleteProduct: productOperations.deleteProduct,
    setSelected: productOperations.setSelectedProduct,
    buyProduct: productOperations.buyProduct
}

const BuyPageContainer = connect(mapStateToProps, mapDispatchToProps)(BuyPage)


export default BuyPageContainer