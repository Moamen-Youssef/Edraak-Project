import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Services from './pages/Services';
import Products from './pages/Products';
import Projects from './pages/Projects';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import AppLayout from './ui/AppLayout';
function App() {
  return (
    <BrowserRouter basename='Edraak-Project'>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to='/home' />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/partners' element={<Partners />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
