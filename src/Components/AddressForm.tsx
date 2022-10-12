import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {  useAppSelector } from '../app/hooks';
import { Box, Button } from '@mui/material';
import { StepPropsInterface } from './../Types/stepper';

const AddressForm: React.FC<StepPropsInterface> = function (props: StepPropsInterface): React.ReactElement {
 
  const user = useAppSelector(state => state.auth.currentUser)
  return (
    <Box component="form" sx={{ mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name.firstname"
            name="name.firstname"
            label="First Name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={user.name.firstname}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name.lastname"
            name="name.lastname"
            label="Last Name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={user.name.lastname}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address.street"
            name="address.street"
            label="Shipping Address"
            value={user?.address?.street}
            fullWidth
            autoComplete="shipping address"
            variant="standard"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="phone"
            name="phone"
            label="Phone Number"
            fullWidth
            value={user?.phone}
            autoComplete="shipping phone"
            variant="standard"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="address.city"
            name="address.city"
            label="City"
            value={user?.address?.city}
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="address.zipcode"
            name="address.zipcode"
            label="Zipcode"
            value={user?.address?.zipcode}
            fullWidth
            autoComplete="zipcode"
            variant="standard"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button type='submit' onClick={props.handleBack} sx={{ mt: 3, ml: 1 }}>
          Back
        </Button>

        <Button
          variant="contained"
          onClick={props.handleNext}
          sx={{ mt: 3, ml: 1 }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default AddressForm