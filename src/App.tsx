import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/navbar'
import KatalogHomeTop from './pages/katalogHomeTop';
import GonHomeTop from './pages/gonHomeTop';
import IzdeleniyaHomeTop from './pages/izdeleniyaHomeTop';
import FonatHomeTop from './pages/fonatHomeTop';
import SopustvuyuwiyHomeTop from './pages/sopustvuyuwiyHomeTop';
import Footer from './components/footer';
import WishlistPage from './pages/WishlistPage';
import CartPage from './pages/CartPage';
import Onas from './pages/Onas';
import HomePage from './pages/HomePage';

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/katalog" element={<KatalogHomeTop />} />
        <Route path="/orujiya" element={<GonHomeTop />} />
        <Route path="/izdeleniyaa" element={<IzdeleniyaHomeTop />} />
        <Route path="/fonari" element={<FonatHomeTop />} />
        <Route path="/sopustvuyushiy" element={<SopustvuyuwiyHomeTop />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/onas" element={<Onas />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
