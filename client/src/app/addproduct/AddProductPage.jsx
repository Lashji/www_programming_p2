import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextArea from '@material-ui/core/TextareaAutosize'
import DropzoneArea from '../components/DropzoneArea'

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
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
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const AddProductPage = (props)=> {

    const classes = useStyles();

    return ( 
    <div>
    <React.Fragment>
        <CssBaseline />
        <main>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
            <Typography variant="h6" gutterBottom>
            Shipping address
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <TextField
                    required
                    id="Name"
                    name="Name"
                    label="Product Name"
                    fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                    required
                    id="Category"
                    name="Product Category"
                    label="Product Category"
                    fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    id="price"
                    name="price"
                    label="Product Price"
                    fullWidth
                    required
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                    id="keywords"
                    name="keywords"
                    label="Product keywords"
                    fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField id="description" name="description" label="Product Description" fullWidth />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <DropzoneArea />
                </Grid>
                
                </Grid>
                </Grid>
            </Container>
        </main>
      </React.Fragment></div>)
}



export default AddProductPage