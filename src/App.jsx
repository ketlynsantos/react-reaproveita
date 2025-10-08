import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import WhereWe from './pages/WhereWe'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

function App() {

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/sobre-nos' element={<AboutUs />}/>
        <Route path='/onde-estamos' element={<WhereWe />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/fale-conosco' element={<Contact />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
