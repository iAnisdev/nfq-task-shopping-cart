import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useAppSelector } from '../app/hooks';

export default function AddressForm() {
  const user = useAppSelector(state => state.auth.currentUser)
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
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
            id="lastName"
            name="lastName"
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
            id="address"
            name="address"
            label="Shipping Address"
            value={`${user?.address?.number} ${user?.address?.street}`}
            fullWidth
            autoComplete="shipping address"
            variant="standard"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
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
      </Grid>
    </React.Fragment>
  );
}