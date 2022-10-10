import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PrivateRoutesProtector from "./router/PrivateRoutesProtector";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PrivateRoutesProtector requiredAuth={true} />}>
          <Route path="" element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="/login" element={<PrivateRoutesProtector requiredAuth={false} />}>
          <Route path="" element={<Login />} />
        </Route>
        <Route path="/signup" element={<PrivateRoutesProtector requiredAuth={false} />}>
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
