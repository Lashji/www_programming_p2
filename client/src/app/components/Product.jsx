import React from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'

const Product = ({product, classes}) => {
    let img = product.images[0]?`/api/images/${product.images[0]}`:"https://source.unsplash.com/random"
    return (
        <Grid item key={product._id} xs={12} sm={6} md={4}>
            <Link style={{textDecoration: 'none'}} to={`/product/${product._id}`}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={img}
                        title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {product.name}
                        </Typography>
                        <Typography>
                            {product.description}
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
            </Link>
        </Grid>
    )
}


export default Product