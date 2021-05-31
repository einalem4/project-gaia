import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, CardDeck, Container, Row, Col, Button } from 'react-bootstrap';
import { CalendarEvent, Clock, GeoAlt } from 'react-bootstrap-icons';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_SEARCH_EVENTS } from '../utils/queries';
import ResultsMap from '../components/ResultsMap';
import Auth from '../utils/auth';

const Results = () => {
    const { city: searchParam } = useParams();
    const {loading, data} = useQuery(QUERY_SEARCH_EVENTS, {
        variables: { city: searchParam }
    });

    const events = data?.searchEvents || {};

    if (loading) {
       return <div>Loading...</div>;
    }

    return(
        <Container id="results" className='d-flex flex-column justify-content-center align-items-center' fluid>
            <Row className='w-100 h-100'>
                <Col xs={12} md={6}>
                    <CardDeck>
                        {events.map(event => (
                            <Card className='d-flex flex-row justify-content-start align-items-center my-2' key={event._id}>
                                <Card.Img variant='top' src={event.image} className='w-25'/>
                                <Card.Body>
                                    <Card.Title>{event.name}</Card.Title>
                                    {Auth.loggedIn() ? (
                                        <>
                                            <Card.Subtitle>
                                                <CalendarEvent style={{marginLeft: '0px', marginRight: '5px', marginTop: '10px', marginBottom: '10px'  }}/> {event.date} 
                                                <Clock style={{marginLeft: '10px', marginRight: '5px', marginTop: '10px', marginBottom: '10px'  }} /> {event.time} 
                                                <GeoAlt style={{marginLeft: '10px', marginRight: '5px', marginTop: '10px', marginBottom: '10px'  }} /> {event.address}
                                            </Card.Subtitle>
                                        </>    
                                    ) : (
                                        <>
                                            <Card.Subtitle>
                                                <CalendarEvent style={{marginLeft: '0px', marginRight: '5px', marginTop: '10px', marginBottom: '10px'  }}/> {event.date} 
                                            </Card.Subtitle>
                                        </>
                                    )}
                                    <Card.Text>{event.description}</Card.Text>
                                    <Button variant='primary'>
                                        <Link to={`/event/${event.id}`} style={{color: 'white', textDecoration:'none'}}>View Event</Link>
                                    </Button>
                                </Card.Body>
                            </Card>    
                        ))}
                    </CardDeck>
                </Col>
                <Col xs={12} md={6}>
                    <ResultsMap mapData={events} />
                </Col>
            </Row>
        </Container>
    );
};

export default Results;