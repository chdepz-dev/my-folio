import { useEffect, useState } from 'react'
import './App.css'
import Preloader from './Components/Preloader/Preloader'
import Header from './Components/Header/Header'
import Home from './Pages/Home'
import projects from './Data/Data'
function App() {

      const [loading, setLoading] = useState(true)
      useEffect(() => {
            const timer = setTimeout(() => {
              setLoading(false);

            }, 8000);
            return () =>  clearTimeout(timer)
      }, [])

  return loading? <Preloader /> : (
    <>
        <Header />
        <Home />
    </>
  ) 
}

export default App
