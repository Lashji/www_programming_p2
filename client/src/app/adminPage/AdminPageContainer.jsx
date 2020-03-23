import {connect } from 'react-redux'

import AdminPage from './AdminPage'
import {productOperations} from '../frontpage/productReducer'

const mapStateToProps= state => {   
    const {pending_products} = state.products
    const {token, role} = state.signIn
    return {pending_products, token, role}
}


const mapDispatchToProps = {
    getProducts: productOperations.getProducts,
    updateProductStatus: productOperations.updateProductStatus,
    deleteProduct: productOperations.deleteProduct
}

const AdminPageContainer = connect(mapStateToProps, mapDispatchToProps)(AdminPage)


export default AdminPageContainer