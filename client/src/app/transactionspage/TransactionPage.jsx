import React from 'react'
import Transaction from '../components/Transaction'
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
const TransactionPage = (props) => {
    console.log("adminPage props",props)
    const classes = useStyles();
    

    
    let products
    if (props.user_bought_products.length > 0)
        products = props.user_bought_products.map(i => {
        return <Transaction key={i._id} product={i} token={props.token} updateProductStatus={props.updateProductStatus} deleteProduct={props.deleteProduct}/>
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


export default TransactionPage