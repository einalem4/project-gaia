import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import ResultsMap from '../components/ResultsMap';

const Results = () => {
    return(
        <Container id="results" fluid>
            <Row>
                <Col>
                    <Card>

                    </Card>
                </Col>
                <Col>
                    <ResultsMap />
                </Col>
            </Row>
        </Container>
    );
};

export default Results;