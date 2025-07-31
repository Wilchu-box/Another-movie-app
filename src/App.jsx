import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import NavBar from './components/NavBar'
import { MovieProvider } from './contexts/MovieContext'
import MovieDetails from './pages/MovieDetails'

function App() {
  return (
    <MovieProvider>
    <NavBar />
    <main>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/favorites' element={<Favorites />}/>
        <Route path='/MovieDetails/:id' element={<MovieDetails />}/>
      </Routes>
    </main>
  </MovieProvider>
  )
}

export default App
