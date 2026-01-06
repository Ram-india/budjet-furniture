
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/common/Navbar'
import TopBar from './components/common/TopBar'
import Home from './pages/Home'
import Footer from './components/common/Footer'
import About from './pages/About'
import Privacypolicy from './pages/Privacypolicy'
import Terms from './pages/Terms'
import Blogs from './pages/Blogs'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import BlogDetails from './pages/BlogDetail'
import ScrollToTop from './components/common/ScrollToTop'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'





function App() {


  return (
  <>
  <TopBar/>
  <Navbar/>
  <ScrollToTop/>
  <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/products/:slug' element={<ProductDetails/>}/>
      <Route path='/blog' element={<Blogs/>}/>
      <Route path='/blog/:slug' element={<BlogDetails/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/privacy-policy' element={<Privacypolicy/>}/>
      <Route path='/terms' element={ <Terms/>}/>
      {/* <Route path="*" element={<NotFound />} /> */}
  </Routes>
  
   <Footer/>
  </>
  )
}

export default App
