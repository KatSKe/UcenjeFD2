import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Izbornik from './components/Izbornik'
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import { RouteNames } from './constants'

import Home from './pages/Home'
import Accommodation from './pages/accommodation/Accommodation' // provjeri folder/fajl
import Reservations from './pages/reservations/Reservations'
import MyProfile from './pages/myProfile/myProfile'

function App() {
  return (
    <Container>
      <Izbornik />

      <Routes>
        <Route path={RouteNames.HOME} element={<Home />} />
        <Route path={RouteNames.ACCOMMODATION} element={<Accommodation />} />
        <Route path={RouteNames.RESERVATIONS} element={<Reservations />} />
        <Route path={RouteNames.MYPROFILE} element={<MyProfile />} />
      </Routes>

      <hr />
      &copy; LaLa Booking
    </Container>
  )
}

export default App