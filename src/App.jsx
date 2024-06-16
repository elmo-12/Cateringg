import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './vistas/inicio'
import Navbar from './components/navbar'
import Menu from './vistas/menu'
import Footer from './components/footer'
import Nosotros from './vistas/nosotros'
import Contactarnos from './vistas/contactarnos'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/Cateringg/' element={<Inicio />} />
        <Route path='/Cateringg/menu' element={<Menu />} />
        <Route path='/Cateringg/nosotros' element={<Nosotros />} />
        <Route path='/Cateringg/contactarnos' element={<Contactarnos />} />
      </Routes>
      <Footer />
    </Router>
  )
}