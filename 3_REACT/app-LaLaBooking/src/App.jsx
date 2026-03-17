import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Izbornik from './components/Izbornik'
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import { RouteNames } from './constants'

import Home from './pages/Home'
import Accommodation from './pages/accommodation/Accommodation'
import Reservations from './pages/reservations/Reservations'
import MyProfile from './pages/myProfile/MyProfile' // ✔️ ispravljeno veliko slovo
import Offers from './pages/offers/Offers' // ✔️ DODANO

function App() {
  return (
    <>
      {/* Navbar ide full width */}
      <Izbornik />

      <Container>
        <Routes>
          <Route path={RouteNames.HOME} element={<Home />} />
          <Route path={RouteNames.ACCOMMODATION} element={<Accommodation />} />
          <Route path={RouteNames.RESERVATIONS} element={<Reservations />} />
          <Route path={RouteNames.MYPROFILE} element={<MyProfile />} />
          <Route path={RouteNames.OFFERS} element={<Offers />} />
        </Routes>

        <hr />
        &copy; LaLa Booking
      </Container>
    </>
  )
}

export default App