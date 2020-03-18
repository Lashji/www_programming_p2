import {connect } from 'react-redux'

import AdminPage from './AdminPage'

const mapStateToProps= state => {

    return {}
}


const mapDispatchToProps = {

}

const AdminPageContainer = connect(mapStateToProps, mapDispatchToProps)(AdminPage)


export default AdminPageContainer