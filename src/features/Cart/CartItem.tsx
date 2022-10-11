import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { CartItemInterface } from '../../Types/product';
import { CartActions } from '../Cart/CartSlice';
import { useAppDispatch } from '../../app/hooks';
import { Dialog, DialogTitle , DialogActions, DialogContent , DialogContentText, Button, ListItem } from '@mui/material';

interface propsInterface {
    product: CartItemInterface
}

const CartItem: React.FC<propsInterface> = function ({ product }: propsInterface): React.ReactElement {
    const disptach = useAppDispatch()
    const [open, setOpen] = React.useState(false);
  
    const handleClose = () => {
      setOpen(false);
    }

    function increment(): void {
        disptach(CartActions.updateItemInCart({ ...product, quanitity: product.quanitity + 1 }))
    }

    function decrement(): void {
        if (product.quanitity > 1) {
            disptach(CartActions.updateItemInCart({ ...product, quanitity: product.quanitity - 1 }))
        } else {
            setOpen(true);
        }
    }

    function handleRemove(): void {
        disptach(CartActions.removeFromCart(product.id))
        setOpen(false);
    }

    return (
        <>
        <Card sx={{ display: 'flex', marginTop: '1vh' }}>
            <CardMedia
                component="img"
                style={{
                    height: '200px',
                    maxWidth: '30%',
                    backgroundRepeat: ' no-repeat',
                    objectFit: 'contain'
                }}
                image={product.image}
                alt={`${product.title}_img`}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {product.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        ${product.price}
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pl: 1, pb: 1 }}>
                    <ListItem sx={{ py: 1, px: 0 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                            ${Number(product.price * product.quanitity).toFixed(2)}
                        </Typography>
                    </ListItem>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', pl: 1, pb: 1 }}>
                        <IconButton aria-label="decrement" onClick={decrement}>
                            <RemoveIcon />
                        </IconButton>
                        <IconButton aria-label="quantity" disabled>
                            {product.quanitity}
                        </IconButton>
                        <IconButton aria-label="increment" onClick={increment}>
                            <AddIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
        </Card>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Remove Item from Cart?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure to remove <b>{product.title} from cart?</b>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleRemove} autoFocus color='error'>
            Remove
          </Button>
        </DialogActions>
      </Dialog>
        </>
    );
}

export default CartItem