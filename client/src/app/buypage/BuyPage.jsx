import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './components/AddressForm';
import PaymentForm from './components/PaymentForm';
import Review from './components/Review';
function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


  
const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    stepper: {
      padding: theme.spacing(3, 0, 5),
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
  }));
  
  const steps = ['Shipping address', 'Payment details', 'Review your order'];
  
  function getStepContent(step, handlers, data) {
    switch (step) {
      case 0:
        return <AddressForm handlers={handlers} />;
      case 1:
        return <PaymentForm handlers={handlers} />;
      case 2:
        return <Review product={data.product} addressInfo={data.addressInfo} paymentInfo={data.paymentInfo} />;
      default:
        throw new Error('Unknown step');
    }
  }
const BuyPage = (props) => {
    const product = props.selectedProduct

    if (!product || !product._id){
        props.history.push("/")
    }
    // console.log("buypage selected", product)
    // console.log("user ID: ", props.ID)
    // console.log("Product ID: ", product._id)
    
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [paymentInfo, setPaymentInfo] = useState({})
    const [addressInfo, setAddressInfo] = useState({})
    console.log("activestep", activeStep)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [address1, setAddress1] = useState("")
    const [address2, setAddress2] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zip, setZip] = useState("")
    const [country, setCountry] = useState("")

    const addressHandlers = {
        setFirstName,
        setLastName,
        setAddress1,
        setAddress2,
        setCity,
        setState,
        setZip,
        setCountry
    }

    const [cardName, setCardName] = useState("")
    const [cardNumber, setCardNumber] = useState("")
    const [expDate, setExpDate] = useState("")
    const [cvv, setCVV] = useState("")
  

    const paymentHandlers = {
        setCardName,
        setCardNumber,
        setExpDate,
        setCVV
    }

    const buildAddressInfo = () => {
        return {
            firstName, 
            lastName,
            address1,
            address2,
            city,
            state,
            zip,
            country
        }
    }

    const buildPaymentInfo = ()=> {
        return {
            cardName,
            cardNumber,
            expDate,
            cvv
        }
    }

    const executeTransaction = () => {
        console.log("Executing transaction")
        props.buyProduct(props.ID, product._id)
    }
    const handleNext = () => {
        let step = activeStep + 1
        setActiveStep(step);

        switch(step){
            case 1: setAddressInfo(buildAddressInfo())
            break;
            case 2: setPaymentInfo(buildPaymentInfo())
            break;
            case 3: executeTransaction()
            break;
        }
    };
  
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };
  
    const getHandler = () => {
        switch(activeStep){
            case 0: return addressHandlers
            case 1: return paymentHandlers
        }
    }

    return (
      <React.Fragment>
        <CssBaseline />
       
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Checkout
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your order.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your order number is #2001539. We have emailed your order confirmation, and will
                    send you an update when your order has shipped.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep, getHandler(), {product, addressInfo, paymentInfo})}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} className={classes.button}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
          <Copyright />
        </main>
      </React.Fragment>
    )
}


export default BuyPage;
