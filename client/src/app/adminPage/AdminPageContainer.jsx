import {connect } from 'react-redux'

import AdminPage from './AdminPage'
import productReducer from '../frontpage/productReducer/'

const mapStateToProps= state => {   
    const {pending_products} = state.products
    const {token, role} = state.signIn
    return {pending_products, token, role}
}


const mapDispatchToProps = {
    updateProductStatus: productReducer.updateProductStatus,
    deleteProduct: productReducer.deleteProduct
}

const AdminPageContainer = connect(mapStateToProps, mapDispatchToProps)(AdminPage)


export default AdminPageContainer