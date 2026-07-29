import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import POS from './pages/POS'
import Inventory from './pages/Inventory'
import Products from './pages/Products'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<POS />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App