import React from 'react'
import PendingProduct from '../components/PendingProduct'
import Grid from '@material-ui/core/Grid'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import {Redirect} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
  
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));
const AdminPage = (props) => {
    console.log("adminPage props",props)
    const classes = useStyles();
    
    if (props.role !== "admin" && props.role !== "shopkeeper"){
        console.log("role not admin => redirecting ", props.role)
        return (
            <Redirect to={{pathname: "/", state: {from: props.location}}} />
        )
    }


    const products = props.pending_products.map(i => {
        return <PendingProduct key={i._id} product={i} updateProductStatus={props.updateProductStatus} deleteProduct={props.deleteProduct}/>
    })

    return (<div>
        <React.Fragment>
            <CssBaseline />
            <main>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        
                        {products}
            
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    </div>)
}


export default AdminPage