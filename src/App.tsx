import { Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Forgot from "./pages/Auth/Forgot";
import Cart from "./pages/Dashboard/Cart";
import Home from "./pages/Dashboard/Home";
import PrivateRoutesProtector from "./router/PrivateRoutesProtector";
import Main from "./pages/Dashboard/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PrivateRoutesProtector requiredAuth={true} />}>
          <Route path="" element={<Main />}>
            <Route path="" index element={<Home />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Route>
        <Route path="/login" element={<PrivateRoutesProtector requiredAuth={false} />}>
          <Route path="" element={<Login />} />
        </Route>
        <Route path="/signup" element={<PrivateRoutesProtector requiredAuth={false} />}>
          <Route path="" element={<Signup />} />
        </Route>
        <Route path="/forgot" element={<PrivateRoutesProtector requiredAuth={false} />}>
          <Route path="" element={<Forgot />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
