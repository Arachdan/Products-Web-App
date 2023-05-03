import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import AddProductPage from './pages/AddProductPage';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductListPage />}></Route>
          <Route path='/add-product' element={<AddProductPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
