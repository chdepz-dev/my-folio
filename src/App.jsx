import { useEffect, useState } from 'react'
import './App.css'
import Preloader from './Components/Preloader/Preloader'
import Header from './Components/Header/Header'
import Home from './Pages/Home'
import projects from './Data/Data'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
function App() {

      const [loading, setLoading] = useState(true)
      useEffect(() => {
            const timer = setTimeout(() => {
              setLoading(false);

            }, 1000);
            return () =>  clearTimeout(timer)
      }, [])

  return loading? <Preloader /> : (
    <>
        <Header />
        <Outlet />
        
       <Footer />
    </>
  ) 
}

export default App
