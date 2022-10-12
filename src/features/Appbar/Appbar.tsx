import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import { MenuOutlined, LogoutOutlined, LightMode, DarkMode } from '@mui/icons-material';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, useNavigate } from 'react-router-dom';
import { AuthActions } from '../Auth/AuthSlice';
import { AppbarActions } from './AppbarSlice';
import { useDispatch } from 'react-redux';
import { Badge, Grid } from '@mui/material';
import { useAppSelector } from '../../app/hooks';

const pages = [{
  label: 'Shop Now',
  to: '/'
}];

const MainAppBar = () => {
  const currentTheme = useAppSelector((state) => state.app.theme)
  const cart = useAppSelector((state) => state.cart.cart)
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn)
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cartSize = cart.reduce((a, b) => {
    return a + b.quanitity
  }, 0)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (): void => {
    setAnchorElNav(null);
  };

  const SetTheme = (): void => {
    dispatch(AppbarActions.toggleTheme())
  }

  const logout = (): void => {
    dispatch(AuthActions.logout())
  }

  const viewCart = (): void => {
    navigate('/cart')
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        {isLoggedIn ?
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Link to="/">
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                LOGO
              </Typography>

            </Link>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuOutlined />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                    <Link to={page.to}>
                      <Typography textAlign="center">{page.label}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Link to={page.to} key={page.label}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page.label}
                  </Button>
                </Link>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              {cartSize > 0 ?
                <IconButton size="large" color="inherit" onClick={viewCart}>
                  <Badge badgeContent={cartSize} color="error">
                    <LocalMallIcon />
                  </Badge>
                </IconButton> : <></>}
              <IconButton size="large" color="inherit" onClick={SetTheme} >
                {currentTheme === 'dark' ? <LightMode /> : <DarkMode />}
              </IconButton>
              <IconButton size="large" color="inherit">
                <Tooltip title="logout">
                  <LogoutOutlined onClick={logout} />
                </Tooltip>
              </IconButton>

            </Box>
          </Toolbar>
          :
          <Toolbar disableGutters>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >

              <AdbIcon sx={{ display: {  md: 'flex' }, mr: 1 }} />

              <Box sx={{ flexGrow: 0}}>
                <IconButton size="large" color="inherit" onClick={SetTheme} >
                  {currentTheme === 'dark' ? <LightMode /> : <DarkMode />}
                </IconButton>
              </Box>

            </Grid>
          </Toolbar>}
      </Container>
    </AppBar>
  );
};
export default MainAppBar;
