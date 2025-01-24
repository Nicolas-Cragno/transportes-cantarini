import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './statics/css/App.css';
import './statics/css/Forms.css';
import Layout from './components/Layout';
import Home from './containers/Home';
import Documentacion from './containers/documentacion/Documentacion';
import Consumo from './containers/consumo/Consumo';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exath path='/' element={<Home/>}></Route>
            <Route exath path='/documentacion' element={<Documentacion/>}></Route>
            <Route exath path='/consumo' element={<Consumo/>}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
