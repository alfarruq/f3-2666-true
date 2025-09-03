
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Barnd from './pages/Brand'
import Advantages from './pages/Advantages'
import OpenClub from './pages/OpenClub'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <Header />

      <div className='container' >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/brand' element={<Barnd />} />
          <Route path='/advantages' element={<Advantages />} />
          <Route path='/openclub' element={<OpenClub />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </>
  )
}

export default App
