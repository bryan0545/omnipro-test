import "./App.scss";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Login, Register, Products } from "./pages";
import { PrivateRoutes, PublicRoutes } from "./models";
import { AuthGuard } from "./guards/AuthGuard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={PublicRoutes.LOGIN} />} />
          <Route path="*" element={<>Not Found</>} />
          <Route path={PublicRoutes.LOGIN} element={<Login />} />
          <Route path={PublicRoutes.REGISTER} element={<Register />} />
          <Route element={<AuthGuard />}>
            <Route path={PrivateRoutes.PRODUCTS} element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
