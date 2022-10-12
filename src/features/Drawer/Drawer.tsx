import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Button, Grid, IconButton, Rating } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { DrawerActions } from './DrawerSlice';
import { ProductAction } from '../Products/ProductSlice';
import { CartActions } from '../Cart/CartSlice';
import { CartItemInterface } from '../../Types/product';

export default function ItemDrawer() {
    const isOpen = useAppSelector(state => state.drawer.isOpen)
    const product: CartItemInterface = useAppSelector((state) => state.product.targetItem)
    const disptach = useAppDispatch()

    const closeDrawer = (): void => {
        disptach(DrawerActions.hide())
    };

    const increment = (): void => {
        disptach(ProductAction.setTargetItem({ ...product, quanitity: product.quanitity + 1 }))
    }

    const decrement = (): void => {
        if (product.quanitity > 0) {
            disptach(ProductAction.setTargetItem({ ...product, quanitity: product.quanitity - 1 }))
        }
    }

    const addToCart = (): void => {
        if (product.quanitity > 0) {
            disptach(CartActions.addToCart(product))
        }
        disptach(DrawerActions.hide())
    }


    return (
        <div>
            <Drawer
                anchor="right"
                open={isOpen}
                onClose={() => closeDrawer}
            >
                <Box
                    sx={{ maxWidth: '500px', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                    role="presentation"
                >
                    <CardHeader
                        title={product.title}
                        subheader={`$${product.price}`}
                    />
                    <CardMedia
                        component="img"
                        image={product.image}
                        alt={`${product.title}_img`}
                        style={{
                            width: '100%',
                            height: '300px',
                            objectFit: 'contain'
                        }}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {product.description}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Grid container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center">
                            <Grid item>
                                <Rating name="product-rating" defaultValue={product.rating.rate} precision={0.1} readOnly /><Typography variant="body2" color="text.secondary"> {product.rating.count} Reviews</Typography>
                            </Grid>
                            <Grid item>
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
                            </Grid>
                        </Grid>
                    </CardActions>

                    <CardActions disableSpacing>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '100%' }}>
                            <Grid container
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center">

                                <Grid item>
                                    <Button variant="contained" color="error" onClick={closeDrawer}>
                                        Close
                                    </Button>

                                </Grid>
                                <Grid>
                                    {
                                        product.quanitity > 0 ? <Button variant="contained" onClick={addToCart}>
                                            Add to Cart (${Number(product.price * product.quanitity).toFixed(2)})
                                        </Button> : <></>
                                    }
                                </Grid>
                            </Grid>
                        </Box>
                    </CardActions>
                </Box>
            </Drawer>
        </div>
    );
}
