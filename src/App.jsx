import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";

import "./App.css";

import Navbar from "./components/common/Navbar";
import TopBar from "./components/common/TopBar";
const Footer = lazy(() => import("./components/footer/Footer"));
import ScrollToTop from "./components/common/ScrollToTop";

/* Lazy-loaded pages */
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Offers = lazy(() => import("./pages/Offers"));
const BlogDetails = lazy(() => import("./pages/BlogDetail"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacypolicy = lazy(() => import("./pages/Privacypolicy"));
const Terms = lazy(() => import("./pages/Terms"));

/* Global Loader */
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="h-10 w-10 rounded-full border-4 border-gray-300 border-t-primary animate-spin" />
  </div>
);

function App() {
  useEffect(() => {
  if (document.getElementById("tawk-script")) return;

  window.Tawk_API = window.Tawk_API || {};
  window.Tawk_LoadStart = new Date();

  const script = document.createElement("script");
  script.id = "tawk-script";
  script.src = "https://embed.tawk.to/698aba697aab411c372a40ae/1jh2ugbp5";
  script.async = true;
  script.charset = "UTF-8";
  script.setAttribute("crossorigin", "*");

  document.body.appendChild(script);
}, []);

  return (
    <>
      <TopBar />
      <Navbar />
      <ScrollToTop />

      {/*  Suspense Wrapper */}
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetails />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/offers/:slug" element={<BlogDetails />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<Privacypolicy />} />
          <Route path="/terms" element={<Terms />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;