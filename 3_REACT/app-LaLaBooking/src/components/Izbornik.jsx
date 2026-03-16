import { Container, Nav, Navbar } from "react-bootstrap" 
// maknut NavDropdown jer se ne koristi

import { useNavigate } from "react-router-dom"
import { IME_APLIKACIJE, RouteNames } from "../constants"

export default function Izbornik() {

    const navigate = useNavigate()

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>

                {/* PROMJENA: maknut href i dodan navigate da ne refresh-a stranicu */}
                <Navbar.Brand onClick={() => navigate(RouteNames.HOME)}>
                    {IME_APLIKACIJE}
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        {/* navigacija na HOME */}
                        <Nav.Link
                            onClick={() => navigate(RouteNames.HOME)}
                        >
                            Home
                        </Nav.Link>

                        {/* navigacija na ACCOMODATION */}
                        <Nav.Link
                            onClick={() => navigate(RouteNames.ACCOMODATION)}
                        >
                            Find Accommodation
                        </Nav.Link>

                        {/* navigacija na RESERVATIONS */}
                        <Nav.Link
                            onClick={() => navigate(RouteNames.RESERVATIONS)}
                        >
                            Reservations
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}