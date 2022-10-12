import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useAppSelector } from '../app/hooks';

export default function Review() {
    const cart = useAppSelector(state => state.cart.cart)
    const user = useAppSelector(state => state.auth.currentUser)
    const totalPrice = cart.reduce((a, b) => {
        return a + (b.price * b.quanitity)
      }, 0)

    const payments = [
      { name: 'Card holder', detail: `${user.name.firstname} ${user.name.lastname}` },
      { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
      { name: 'Expiry date', detail: '04/2024' },
    ];
    
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cart.map((item) => (
          <ListItem key={item.title} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={item.title} secondary={`$${item.price} x ${item.quanitity}`} />
            <Typography variant="body2">{item.price * item.quanitity}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${totalPrice}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{user.name.firstname} {user.name.lastname}</Typography>
          <Typography gutterBottom>{`${user?.address?.number} ${user?.address?.street}`}</Typography>
          <Typography gutterBottom>{user?.address?.city}</Typography>
          <Typography gutterBottom>{user?.phone}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}