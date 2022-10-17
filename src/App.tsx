import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Forgot from "./pages/Auth/Forgot";
import Cart from "./pages/Dashboard/Cart";
import Home from "./pages/Dashboard/Home";
import PrivateRoutesProtector from "./router/PrivateRoutesProtector";
import Main from "./pages/Dashboard/Main";
import { createTheme, ThemeProvider } from "@mui/material";
import { RootState } from "./app/store";
import Checkout from "./pages/Dashboard/Checkout";
import AuthPage from "./pages/Auth/Auth";
import { useAppSelector , useAppDispatch } from "./app/hooks";
import { DrawerActions } from "./features/Drawer/DrawerSlice";
import { ProductAction } from "./features/Products/ProductSlice";
import { useMemo } from "react";
function App() {
  const disptach = useAppDispatch()

  const {pathname} = useLocation()

  const currentTheme = useAppSelector((state: RootState) => state.app.theme)
  const isOpen = useAppSelector(state => state.drawer.isOpen)
  
  useMemo(() => {
    if(isOpen){
      disptach(disptach(DrawerActions.hide()))
      disptach(ProductAction.resetTargetItem())
    }
  }, [pathname])

  const theme = createTheme({
    palette: {
      mode: currentTheme
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<PrivateRoutesProtector requiredAuth={true} />}>
          <Route path="" element={<Main />}>
            <Route path="" index element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Route>

        <Route path="/" element={<PrivateRoutesProtector requiredAuth={false} />}>
          <Route path="" element={<AuthPage />}>
            <Route path="login" index element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="forgot" element={<Forgot />} />
          </Route>
        </Route>

      </Routes>
    </ThemeProvider>
  );
}

export default App;
