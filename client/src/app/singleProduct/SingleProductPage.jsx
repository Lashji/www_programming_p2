import React, {useEffect} from 'react';
import {
    useParams
} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}))

const SingleProductPage = ({selectedProduct, setSelected}) => {
    const classes = useStyles()
    const {id} = useParams()
    setSelected(id)
    console.log("single props:",selectedProduct)

    if (selectedProduct === undefined){
        return <Typography component="h2" variant="h2" align="center" >
            No Product Found
        </Typography>
    }

    let img = selectedProduct.images[0]?`http://localhost:3000/api/images/${selectedProduct.images[0]}`:"https://source.unsplash.com/random"


    return (
     <div>
         <Container className={classes.cardGrid}>

         <Grid item key={selectedProduct._id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={img}
                        title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {selectedProduct.name}
                        </Typography>
                        <Typography>
                            {selectedProduct.description}
                            </Typography>
                    </CardContent>
                    <CardActions>
                        {/* <Button size="small" color="primary">
                            View
                        </Button>
                        <Button size="small" color="primary">
                            Edit
                        </Button> */}
                    </CardActions>
                </Card>
        </Grid>       
        </Container>

     </div>   
    )
}


export default SingleProductPage


