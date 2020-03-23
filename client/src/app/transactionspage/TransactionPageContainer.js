import {
    connect
} from 'react-redux'

import TransactionPage from './TransactionPage'
import {
    productOperations
} from '../frontpage/productReducer'

const mapStateToProps = state => {
    const {
        user_bought_products
    } = state.products
    const {
        token,
        role
    } = state.signIn
    return {
        user_bought_products,
        token,
        role
    }
}


const mapDispatchToProps = {
    updateProductStatus: productOperations.updateProductStatus,
    deleteProduct: productOperations.deleteProduct,
    setSelected: productOperations.setSelectedProduct
}

const TransactionPageContainer = connect(mapStateToProps, mapDispatchToProps)(TransactionPage)


export default TransactionPageContainer