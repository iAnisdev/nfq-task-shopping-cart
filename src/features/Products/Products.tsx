import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid';
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import ProductCard from './Product'
import { loadProducts } from './ProductSlice'
import { Box } from '@mui/system';

function Products() {
  const products = useAppSelector((state) => state.product.products)
  const disptach = useAppDispatch()

  useEffect(() => {
    disptach(loadProducts())
  }, [])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {products.map((product, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Products


