import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import Error404 from './component/Errors/Error404'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Error404 /> } />
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App