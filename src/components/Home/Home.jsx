import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    //get the user
    const token = localStorage.getItem('token');

    const navigate = useNavigate();
    const navigateToAdopt = () => {
        navigate('/toadopt')
    }
    const navigateToPostAnimal = () => {
        navigate('/post-pet')
    }
    const navigateToLogin = () => {
        navigate('/login')
    }
    const navigateToRegister = () => {
        navigate('/register')
    }




    return (<div>
        {token && (
                <Container className="my-5">
                <Row className="p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                  <Col lg={6} className="p-3 p-lg-5 pt-lg-3">
                    <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
                      ZooNation
                    </h1>
                    <br></br>
                    <p className="lead">
                      Nascemos com o objetivo de ajudar cães e gatos a encontrarem um lar para chamarem de seu! As patinhas que você encontra nesse site estão ansiosas para lhe conhecer.
                    </p>
                    <br></br>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                      <Button variant="primary" size="lg" className="px-4 me-md-2 fw-bold" onClick={navigateToAdopt}>
                        Adote
                      </Button>
                      <Button variant="outline-secondary" size="lg" className="px-4" onClick={navigateToPostAnimal}>
                        Cadastre um Pet
                      </Button>
                    </div>
                  </Col>
                  <Col lg={4} className="offset-lg-1 p-0 overflow-hidden shadow-lg">
                    <img className="rounded-lg-3" src="bootstrap-docs.png" alt="" width="720" />
                  </Col>
                </Row>
              </Container>
        )}
        {!token && (
                <Container className="my-5">
                <Row className="p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                  <Col lg={6} className="p-3 p-lg-5 pt-lg-3">
                    <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
                      ZooNation
                    </h1>
                    <br></br>
                    <p className="lead">
                      Nascemos com o objetivo de ajudar cães e gatos a encontrarem um lar para chamarem de seu! As patinhas que você encontra nesse site estão ansiosas para lhe conhecer.
                    </p>
                    <br></br>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                      <Button variant="primary" size="lg" className="px-4 me-md-2 fw-bold" onClick={navigateToLogin}>
                        Login
                      </Button>
                      <Button variant="outline-secondary" size="lg" className="px-4" onClick={navigateToRegister}>
                        Signin
                      </Button>
                    </div>
                  </Col>
                  <Col lg={4} className="offset-lg-1 p-0 overflow-hidden shadow-lg">
                    <img className="rounded-lg-3" src="bootstrap-docs.png" alt="" width="720" />
                  </Col>
                </Row>
              </Container>            

        )}
    </div>);
};

export default Home;
