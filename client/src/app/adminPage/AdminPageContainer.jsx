import {connect } from 'react-redux'

import AdminPage from './AdminPage'
import {productReducer} from '../frontpage/productReducer'

const mapStateToProps= state => {   
    const {pending_products} = state.products

    return {pending_products}
}


const mapDispatchToProps = {
    // pending_products: productReducer.getPendingProducts()
}

const AdminPageContainer = connect(mapStateToProps, mapDispatchToProps)(AdminPage)


export default AdminPageContainer