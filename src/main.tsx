import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'react-alice-carousel/lib/alice-carousel.css';
import { BrowserRouter } from 'react-router-dom'
import 'aos/dist/aos.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
