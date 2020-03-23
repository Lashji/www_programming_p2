import React, { useEffect } from 'react';
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
import { Link } from 'react-router-dom'
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
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
        width: '100%',
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


const ImageGrid = (props) => {

    let tileData = [];
    if (props.images[0]) {
        props.images.forEach(imageName => {
            tileData.push({
                img: "http://localhost:3000/api/images/" + imageName,
                title: imageName,
                cols: 1,
            })
        })
    }
    else {
        tileData.push({
            img: "https://source.unsplash.com/random",
            title: "random image",
            cols: 1
        })
    }
    return (
        <GridList cellHeight={500} cols={props.images ? props.images.length : 1}>
            {tileData.map(tile => (
                <GridListTile key={tile.img} cols={tile.cols || 1} onClick={(e) => { props.handleClick(tile) }}>
                    <img src={tile.img} alt={tile.title} />
                </GridListTile>
            ))}
        </GridList>
    )
}

const SingleProductPage = ({ selectedProduct, setSelected, role, updateProductStatus, token, history }) => {
    const [open, setOpen] = React.useState(false);
    const [imageURL, setImageURL] = React.useState("");

    const onTileTouch = (tile) => {
        setImageURL(tile.img);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const classes = useStyles()
    const { id } = useParams()
    useEffect(() => {
        setSelected(id, token)
    }, [])
    console.log("single props:", selectedProduct)

    if (!selectedProduct) {
        return <Typography component="h2" variant="h2" align="center" >
            No Product Found
        </Typography>
    }
    let cardMedia;

    let img = selectedProduct.images[0] ? ImageGrid : "https://source.unsplash.com/random"

    const setPending = (id) => {
        console.log("setting pending", id)
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
                <Grid container alignItems="center" justify="center">
                    <Grid item key={selectedProduct._id} xs={10}>
                        <Paper elevation={3}>
                            {ImageGrid({ images: selectedProduct.images, handleClick: onTileTouch })}
                            <Card className={classes.card}>
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
            <Modal
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <img src={imageURL} alt={imageURL}/>
                    </div>
                </Fade>
            </Modal>

        </div>
    )
}


export default SingleProductPage


