import React from 'react'
import PendingProduct from '../components/PendingProduct'
import Grid from '@material-ui/core/Grid'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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
    noProducts: {
        textAlign: "center"
    }
}));
const AdminPage = (props) => {
    console.log("adminPage props",props)
    const classes = useStyles();
    React.useEffect(() => {
        props.getProducts(props.token);
    },[]);
    
    if (props.role !== "admin" && props.role !== "shopkeeper"){
        console.log("role not admin => redirecting ", props.role)
        props.history.push("/sign_in")
    }

    
    let products
    if (props.pending_products.length > 0)
        products = props.pending_products.map(i => {
        return <PendingProduct key={i._id} product={i} token={props.token} updateProductStatus={props.updateProductStatus} deleteProduct={props.deleteProduct}/>
        })
    else
        products = (<div className={classes.noProducts}>
                    <Typography align="center" component="h3" variant="h3">
                    No Pending products at the moment
                    </Typography>
                    </div>)



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