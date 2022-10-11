
import { Container } from '@mui/material'
import Products from '../../features/Products/Products';
import Search from '../../features/Search/Search';

function Home() {
  return (
    <Container maxWidth="xl" style={{ paddingTop: '5vh' }}>
      <Search />
      <br />
      <Products />
    </Container>
  )
}

export default Home