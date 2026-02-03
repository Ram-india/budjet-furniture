import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import "swiper/css";
import "swiper/css/pagination";
import { SettingsProvider } from "./context/SettingsContext.jsx";
import { ProductProvider } from "./context/ProductContext";


createRoot(document.getElementById("root")).render(
 
    <BrowserRouter basename="/demo">
      <SettingsProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </SettingsProvider>
    </BrowserRouter>

);
