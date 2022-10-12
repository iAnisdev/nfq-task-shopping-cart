import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { StepPropsInterface } from '../../Types/stepper';
import { Box, Button } from '@mui/material';
import { PaymentActions } from './PaymentSlice';

const PaymentForm: React.FC<StepPropsInterface> = function (props: StepPropsInterface): React.ReactElement {
  const user = useAppSelector(state => state.auth.currentUser)
  const card = useAppSelector(state => state.payment.card)
  const disptach = useAppDispatch()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    const name = event.target.name;
    disptach(PaymentActions.setCard({
      ...card,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> ): void => {
    e.preventDefault()
    props.handleNext()
  }

  return (
    <Box component="form" sx={{ mt: 3 }} onSubmit={e => handleSubmit(e)}>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="name"
            name='name'
            label="Name on Card"
            value={`${user.name.firstname} ${user.name.lastname}`}
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="number"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            name='number'
            value={card.number}
            onChange={handleChange}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
        <TextField
            required
            id="expiry"
            name='expiry'
            label="Card Expiry"
            fullWidth
            type="date"
            autoComplete="cc-expiry"
            value={card.expiry}
            onChange={handleChange}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            name="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            value={card.cvv}
            onChange={handleChange}
            variant="standard"
          />
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={props.handleBack} sx={{ mt: 3, ml: 1 }}>
          Back
        </Button>

        <Button
          variant="contained"
          type='submit'
          sx={{ mt: 3, ml: 1 }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}


export default PaymentForm