import { ReactElement, useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import ProductCard from './Product'
import { loadProducts } from './ProductSlice'
import { Box } from '@mui/system';
import { ProductInterface } from './../../Types/product'
import { Alert } from '@mui/material';

function Products() {
  const products = useAppSelector((state) => state.product.products)
  const search = useAppSelector((state) => state.search.search)
  const isOpen = useAppSelector((state) => state.loader.open)
  const disptach = useAppDispatch()

  useEffect(() => {
    disptach(loadProducts())
    // eslint-disable-next-line
  }, [])

  let [filteredProducts, setProduct] = useState<ProductInterface[]>(() => {
    return []
  })

  useEffect(() => {
    if (search.trim() !== '') {
      let filtered = products.filter((product: ProductInterface) => {
        return product.title.includes(search) || product.description.includes(search)
      })
      setProduct(filtered)
    } else {
      setProduct(products)
    }
  }, [search, products])

  let errorBlock: ReactElement = <div></div>
  if (search.trim() !== '' && filteredProducts.length === 0) {
    errorBlock = <Alert severity="error">No Products macthing your search query</Alert>
  }
  if (!isOpen && products.length === 0) {
    errorBlock = <Alert severity="error">No Products available</Alert>
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 2, sm: 8, md: 12 }}>
        {filteredProducts.map((product, index) => (
          <Grid item xs={2} sm={4} md={3} key={index}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      <br />
      {errorBlock}
    </Box>
  )
}

export default Products


