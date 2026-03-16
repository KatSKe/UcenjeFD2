import { Container, Nav, Navbar } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { IME_APLIKACIJE, RouteNames } from "../constants"

export default function Izbornik() {
    const navigate = useNavigate()

    return (
        <Navbar expand="lg" bg="light" variant="light" className="mb-3">
            <Container>

                {/* Brand: klikom ide na HOME */}
                <Navbar.Brand 
                    style={{ cursor: "pointer" }} 
                    onClick={() => navigate(RouteNames.HOME)}
                >
                    {IME_APLIKACIJE}
                </Navbar.Brand>

                {/* Toggle za mobilne uređaje */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        {/* HOME */}
                        <Nav.Link onClick={() => navigate(RouteNames.HOME)}>
                            Home
                        </Nav.Link>

                        {/* ACCOMMODATION */}
                        <Nav.Link onClick={() => navigate(RouteNames.ACCOMMODATION)}>
                            Find Accommodation
                        </Nav.Link>

                        {/* RESERVATIONS */}
                        <Nav.Link onClick={() => navigate(RouteNames.RESERVATIONS)}>
                            Reservations
                        </Nav.Link>

                        {/* MY PROFILE */}
                        <Nav.Link onClick={() => navigate(RouteNames.MYPROFILE)}>
                            My Profile
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}