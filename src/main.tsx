import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'react-alice-carousel/lib/alice-carousel.css';
import { BrowserRouter } from 'react-router-dom'
import { CoinsProvider } from './Context/CoinsContext/CoinContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <CoinsProvider>
    <App />
    </CoinsProvider>
  </BrowserRouter>,
)
