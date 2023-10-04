import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Header from './_header';
import Main from './main';
import Slider from './slider';
import Error from './error';
import Footer from './_footer';
import './style.scss';


const App: React.FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/lad/' element={<Main />} />
          <Route path='/lad/slider' element={<Slider />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App;