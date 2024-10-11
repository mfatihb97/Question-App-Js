import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import UserService from '../Service/UserService';

export const NavigationBar = () => {
    const isAuthenticated = UserService.isAuthenticated();
    const isAdmin = UserService.isAdmin();

    const handleLogout = () => {
        const confirmDelete = window.confirm("Are you sure you want to logout this user?");
        if (confirmDelete) {
            UserService.logout();
        }
    }
    return (
        <>
            <Navbar expand="sm" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="/">Soru Yarışması</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">
                                Soru Yarışması
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                {!isAuthenticated && <Nav.Link href="/">Anasayfa</Nav.Link>}
                                {isAuthenticated && <Nav.Link href="/welcome">Testler</Nav.Link>}
                                <Nav.Link href="/signup">Üye Ol</Nav.Link>
                                <Nav.Link href="/login">Giriş Yap</Nav.Link>
                                {isAdmin && <Nav.Link href="/admin/user-management">Üye Yönetimi</Nav.Link>}
                                {isAuthenticated && <Nav.Link to='/' onClick={handleLogout}>Çıkış</Nav.Link>}
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>

    )
}
