import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import AddressForm from './../../Components/AddressForm';
import PaymentForm from '../../features/Payment/PaymentForm';
import Review from './../../Components/Review';
import { CartActions } from '../../features/Cart/CartSlice';
import { useAppDispatch } from '../../app/hooks';
import { StepPropsInterface } from '../../Types/stepper'
import { useNavigate } from 'react-router-dom';
const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step: number, props: StepPropsInterface) {
  switch (step) {
    case 0:
      return <AddressForm {...props} />;
    case 1:
      return <PaymentForm  {...props} />;
    case 2:
      return <Review  {...props} />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const disptach = useAppDispatch()
  const navigate = useNavigate()
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    if ((activeStep + 1) === steps.length) {
      disptach(CartActions.resetCart())
    }
  };

  const handleBack = () => {
    if(activeStep === 0){
      navigate('/cart')
    }
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
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
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep, { handleNext, handleBack })}
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </>
  );
}