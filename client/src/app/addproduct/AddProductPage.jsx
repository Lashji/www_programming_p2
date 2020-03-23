import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
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

const AddProductPage = (props) => {

    if (!props.token)
        props.history.push("/sign_in")

    const [files, setFiles] = useState([])
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [keywords, setKeywords] = useState("")
    const [description, setDescription] = useState("")

    const handleFiles = (e) => {
        console.log("handling files", e)
        setFiles(e)
    }

    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("handling submit", e.target)

        const data = new FormData()
        data.append("user_ID", props.ID)
        data.append("name", name)
        data.append("category", category)
        data.append("sale_price", price)
        data.append("keywords", keywords)
        data.append("description", description)
        data.append("image", files[0])

        props.postProduct(data, props.token)

        props.history.push("/")
    }



    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                <main>
                    <Container className={classes.cardGrid} maxWidth="md">
                        <Grid container spacing={4}>
                            <Typography variant="h6" gutterBottom>
                                Add New Product
                            </Typography>
                            <form onSubmit={e => handleSubmit(e)}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={12}>
                                        <TextField
                                            onChange={e => setName(e.target.value)}
                                            required
                                            id="Name"
                                            name="Name"
                                            label="Product Name"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <TextField
                                            onChange={e => setCategory(e.target.value)}
                                            required
                                            id="Category"
                                            name="Product Category"
                                            label="Product Category"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            onChange={e => setPrice(e.target.value)}
                                            id="price"
                                            name="price"
                                            label="Product Price"
                                            fullWidth
                                            type="number"
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <TextField
                                            onChange={e => setKeywords(e.target.value)}
                                            id="keywords"
                                            name="keywords"
                                            label="Product keywords"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <TextField onChange={e => setDescription(e.target.value)} id="description" name="description" label="Product Description" fullWidth />
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <Typography variant="h6" gutterBottom>
                                            Add Image
                                        </Typography>
                                        <DropzoneArea handleChange={handleFiles} />
                                    </Grid>

                                    <Grid item xs={12} >
                                        <Button type="submit" fullWidth variant="contained" color="primary">Submit</Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Container>

                </main>
            </React.Fragment></div>)
}



export default AddProductPage