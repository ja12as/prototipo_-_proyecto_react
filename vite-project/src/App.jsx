import {Route, Routes} from 'react-router-dom';
import { Layout } from './componentes/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Contact} from './pages/Contact';
import { Footer} from  './componentes/Footer';
import { Sidebars } from './componentes/Sidebars';
import { Supplier } from './pages/Supplier';
export const App =() => {
  return (
    <>
    <Layout/>
    <Routes>
      <Route path='/' element={<Sidebars/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/supplier' element={<Supplier/>}/>
      </Route>
    </Routes>
    <Footer/>
    </>
  );
};

