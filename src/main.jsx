
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import "swiper/css";
import "swiper/css/pagination";
import { Settings } from 'lucide-react';
import { SettingsProvider } from './context/SettingsContext.jsx';

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <SettingsProvider>
    <App />
 </SettingsProvider>
  </BrowserRouter>

)
