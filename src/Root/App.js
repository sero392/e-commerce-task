import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "../Views/HomePage";
import Products from "../Views/Products";
import Basket from '../Views/Basket';
import { useState } from "react";
function App() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  //Global Kullanım
  window.navigateUrl = navigate;
  window.loading = setLoading;
  return (
    <div className="container">
      {
        loading ? (
          <div className="loading-container">
            <div className="loading">
              <div className="lds-hourglass"></div>
            </div>
          </div>
        ) : (<template></template>)
      }
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Products" element={<Products />}></Route>
        <Route path="/Basket" element={<Basket />}></Route>
      </Routes>
    </div>
  );
}

export default App;
