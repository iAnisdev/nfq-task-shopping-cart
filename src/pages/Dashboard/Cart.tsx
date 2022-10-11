import { Box, Button, List, ListItem, ListItemText, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import CartItem from '../../features/Cart/CartItem';

function Cart() {
  const navigate = useNavigate()
  const cart = useAppSelector((state) => state.cart.cart)
  const totalPrice = cart.reduce((a, b) => {
    return a + (b.price * b.quanitity)
  }, 0)

  const toCheckout = (): void =>{
    navigate('/checkout')
  }

  return (
    <Container maxWidth="md" style={{ paddingTop: '5vh' }}>
      <Typography variant="h5" gutterBottom>
        Your Basket
      </Typography>
      <List disablePadding>
        {cart.map((item) => (
          <CartItem product={item} key={item.id}/>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Shipping" />
          <Typography variant="caption" sx={{ fontWeight: 700 }}>
            Free
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${totalPrice.toFixed(2)}
          </Typography>
        </ListItem>
      </List>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt: '2vh', pb: '2vh', alignItems: 'center', width: '100%' }}>
        <Button variant="contained" onClick={toCheckout}>
          Checkout
        </Button>
        </Box>
    </Container>
  )
}

export default Cart