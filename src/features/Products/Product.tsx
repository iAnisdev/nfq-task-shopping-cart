import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { ProductInterface } from '../../Types/product';
import { Chip, Grid, Rating } from '@mui/material';

interface propsInterface {
  product: ProductInterface
}

const ProductCard: React.FC<propsInterface> = function ({ product }: propsInterface): React.ReactElement {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={product.title}
      />
      <CardMedia
        component="img"
        image={product.image}
        alt={`${product.title}_img`}
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
            <Rating name="product-rating" defaultValue={product.rating.rate} precision={0.1} readOnly />
          </Grid>
          <Grid item >
            <Chip label={product.category} color="success" />
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}

export default ProductCard