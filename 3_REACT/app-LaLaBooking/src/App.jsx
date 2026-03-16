import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Izbornik from './components/Izbornik'
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import { RouteNames } from './constants'
import Home from './pages/Home'

// PROMJENA: ispravljen import komponente
import Accomodation from './pages/accomodation/Accomodation'

// PROMJENA: ispravno ime datoteke
import Reservations from './pages/reservations/Reservations'

function App() {

  return (
    <Container>
      <Izbornik />

      <Routes>

        <Route 
          path={RouteNames.HOME} 
          element={<Home />} 
        />

        {/* PROMJENA: koristi Accomodation komponentu */}
        <Route 
          path={RouteNames.ACCOMODATION} 
          element={<Accomodation />} 
        />

        <Route 
          path={RouteNames.RESERVATIONS} 
          element={<Reservations />} 
        />

      </Routes>

      <hr />
      &copy; LaLa Booking
    </Container>
  )
}

export default App