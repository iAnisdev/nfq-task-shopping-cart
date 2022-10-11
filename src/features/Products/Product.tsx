import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { ProductInterface } from '../../Types/product';
import { Grid, IconButton, Rating } from '@mui/material';
import { AddShoppingCartOutlined } from '@mui/icons-material';
import { DrawerActions } from '../Drawer/DrawerSlice';
import { ProductAction } from './ProductSlice';
import { useAppDispatch } from '../../app/hooks';

interface propsInterface {
  product: ProductInterface
}

const ProductCard: React.FC<propsInterface> = function ({ product }: propsInterface): React.ReactElement {
  const disptach = useAppDispatch()
  function addToCart(){
    disptach(ProductAction.setTargetItem(product))
    disptach(DrawerActions.show())
  }
  return (
    <Card>
      <CardHeader
        title={product.title.slice(0, 20) + '...'}
        subheader={`$${product.price}`}
      />
      <CardMedia
        component="img"
        image={product.image}
        alt={`${product.title}_img`}
        style={{
          width:' 100%',
          height: '350px',
          backgroundRepeat:' no-repeat',
          objectFit: 'contain'
        }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {product.description.slice(0, 60) + '...'}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Grid container
          direction="row"
          justifyContent="space-between"
          alignItems="center">
          <Grid item>
            <Rating name="product-rating" defaultValue={product.rating.rate} precision={0.1} readOnly />
          </Grid>
          <Grid item >
            <IconButton color="primary" aria-label="add to shopping cart" onClick={addToCart}>
              <AddShoppingCartOutlined />
            </IconButton>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}

export default ProductCard