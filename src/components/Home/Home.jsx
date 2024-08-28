import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; 
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const navigateToAdopt = () => navigate('/toadopt');
    const navigateToPostAnimal = () => navigate('/post-pet');
    const navigateToLogin = () => navigate('/login');
    const navigateToRegister = () => navigate('/register');

    return (
        <div className="home-container">
            {token ? (
                <Container className="my-5">
                    <Row className="p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg custom-card">
                        <Col lg={6} className="p-3 p-lg-5 pt-lg-3">
                            <h1 className="display-3 fw-bold mb-4">ZooNation</h1>
                            <p className="lead text-muted mb-4">
                                Nascemos com o objetivo de ajudar cães e gatos a encontrarem um lar para chamarem de seu! As patinhas que você encontra nesse site estão ansiosas para lhe conhecer.
                            </p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                                <Button variant="primary" size="lg" className="px-4 me-md-2 fw-bold custom-button" onClick={navigateToAdopt}>
                                    Adote
                                </Button>
                                <Button variant="primary" size="lg" className="px-4 me-md-2 fw-bold custom-button" onClick={navigateToPostAnimal}>
                                    Cadastre um Pet
                                </Button>
                            </div>
                        </Col>
                        <Col lg={6} className="p-0 overflow-hidden">
                            <div className="placeholder-image"></div>
                        </Col>
                    </Row>
                </Container>
            ) : (
                <Container className="my-5">
                    <Row className="p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg custom-card">
                        <Col lg={6} className="p-3 p-lg-5 pt-lg-3">
                            <h1 className="display-3 fw-bold  mb-4">ZooNation</h1>
                            <p className="lead text-muted mb-4">
                                Nascemos com o objetivo de ajudar cães e gatos a encontrarem um lar para chamarem de seu! As patinhas que você encontra nesse site estão ansiosas para lhe conhecer.
                            </p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                                <Button  size="lg" className="px-4 me-md-2 fw-bold custom-button" onClick={navigateToLogin}>
                                    Login
                                </Button>
                                <Button size="lg" className="px-4 me-md-2 fw-bold custom-button" onClick={navigateToRegister}>
                                    Signin
                                </Button>
                            </div>
                        </Col>
                        <Col lg={6} className="p-0 overflow-hidden">
                            <div className="placeholder-image"></div>
                        </Col>
                    </Row>
                </Container>
            )}
        </div>
    );
};

export default Home;
