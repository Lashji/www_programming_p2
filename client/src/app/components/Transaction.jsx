import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 300,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },

}));


const PendingProduct = ({product,updateProductStatus,deleteProduct, token})=>{
    console.log("update", updateProductStatus)
    const classes = useStyles();
    const theme = useTheme();
    let img = product.images[0]?`http://localhost:3000/api/images/${product.images[0]}`:"https://source.unsplash.com/random"
    // console.log("pending product = ", product)
    return (
        <Grid item xs={12}>
        <Card  className={classes.root}>
        <CardMedia
            className={classes.cover}
            image={img}
            title="Live from space album cover"
        />
        <div className={classes.details}>
            <CardContent className={classes.content}>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <Typography component="h5" variant="h5">
                            {product.name}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {product.description}
                        </Typography>
                    </Grid>
                    <Grid container>
                        <Grid item xs={6}>
                        <Typography component="h5" variant="h5">
                            Price {product.offer_price}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Sale price {product.sale_price}
                        </Typography>
                        </Grid>
                        {/* <Grid item xs={6}>
                            <Button onClick={e => updateProductStatus(product._id, token, 1)} variant="contained" color="primary" >Accept</Button>
                            <Button onClick={e => deleteProduct(product._id, token)} variant="contained" color="secondary">Reject</Button>
                        </Grid> */}

                    </Grid>
                </Grid>
            </CardContent>
         
        </div>
        </Card>
        </Grid>
    )
}


export default PendingProduct