import { useState } from 'react'
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp/SignUp'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Header />
    <Routes> 
      <Route path='/signup' element={<SignUp />} >
     
      </Route>
    </Routes>
    <Footer />
    </ BrowserRouter>
  )
}

export default App
