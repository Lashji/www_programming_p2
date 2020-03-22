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
import Paper from '@material-ui/core/Paper'
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        height: "80vh"
    },
    // gridContainer:{
    //     height:"100%",
    //     width: "50vw"
    // },
    // gridPaper: {
    //     width: "100%"
    // },
    card: {
        height: '100%',
        width:'100%',
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

const SingleProductPage = ({selectedProduct, setSelected, role, updateProductStatus, token, history}) => {
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

    const setPending = (id) => {
        console.log("setting pending" , id)
        updateProductStatus(id, token, 0)
        history.push("/")
    }

    const Buttons = () => {

        let setPendingButton
        if (role === 'admin' || role === 'shopkeeper')
            setPendingButton = <Button variant="contained" size="large" color="secondary" onClick={e => setPending(id)}>Set Pending</Button>
        else 
        setPendingButton = ""

        return (<div>
                {setPendingButton}
                <Link to={`/buy/${id}`}>
                    <Button variant="contained" size="large" color="primary">
                        Buy
                    </Button>
                </Link>
             </div>)

    }

    return (
     <div>
         <Container className={classes.cardGrid}>
        <Grid  container alignItems="center" justify="center">
         <Grid item key={selectedProduct._id} xs={10}>
             <Paper elevation={3}>
                <Card  className={classes.card}>
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
                       <Buttons></Buttons>
                    </CardActions>
                </Card>
                </Paper>
                </Grid>
        </Grid>       
        </Container>

     </div>   
    )
}


export default SingleProductPage


