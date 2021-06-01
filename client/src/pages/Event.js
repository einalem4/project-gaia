import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/react-hooks';
import { Card, Button, Form, Container, Row, Col, Image } from 'react-bootstrap';
import { CalendarEvent, Clock, GeoAlt } from 'react-bootstrap-icons';
import { ADD_COMMENT } from '../utils/mutations';
import { QUERY_SINGLE_EVENT } from '../utils/queries';

import CommentList from '../components/CommentList';
import AttendanceList from '../components/AttendanceList';
import Auth from '../utils/auth';

function Event() {
    const { id: eventId } = useParams();

    const { loading, data } = useQuery(QUERY_SINGLE_EVENT, {
        variables: { id: eventId }
    });

    const [commentText, setCommentText] = useState('');
    const [comment, {error}] = useMutation(ADD_COMMENT);

    const event = data?.singleEvent || {};

    console.log(event);

    if (loading) {
        return <div>Loading...</div>
    }

    const handleChange = event => {
        if (event.target.value.length > 0){
            setCommentText(event.target.value)
        }
        // console.log(commentText)
    }

    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
            await comment ({variables: {commentText}})
            setCommentText('')
        } catch (e) {
            console.log(e)
        }
    };
    return (
        <Container id='event' className='my-5'>
            <Row className='align-items-center'>
                <Col xs={12} md={6}>
                    <Image src={event.image} fluid rounded />
                </Col>
                <Col xs={12} md={6}>
                    <h2>{event.name}</h2>
                    <Container className='event-info p-0'>
                        <p>
                            <CalendarEvent style={{marginLeft: '0px', marginRight: '5px', marginTop: '10px', marginBottom: '10px'  }}/> {event.date} 
                            <Clock style={{marginLeft: '10px', marginRight: '5px', marginTop: '10px', marginBottom: '10px'  }} /> {event.time} 
                            <GeoAlt style={{marginLeft: '10px', marginRight: '5px', marginTop: '10px', marginBottom: '10px'  }} /> {event.address}, {event.city}, {event.state}
                        </p>
                    </Container>
                    <p>{event.description}</p>
                    <Button variant="success">RSVP</Button>
                    <h5 className='my-4'>People Attending: {event.attendanceCount}</h5>
                    {event.attendanceCount > 0 && <AttendanceList attendees={event.attendees} />}
                </Col>
            </Row>

            <Row>
                <Col>
                    {Auth.loggedIn() && 
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label></Form.Label>
                            <Form.Control onChange={handleChange} as="textarea" rows={3} placeholder='Leave Comment Here'/>
                            <br/>
                            <Button variant='primary' type='submit'>Post Comment</Button>
                        </Form.Group>
                    </Form>
                    }
                    <h3 className='my-3'>Comments</h3>
                    <CommentList comments={event.comments} commentCount={event.commentCount} />
                </Col>
            </Row>
        </Container>
    )
}

export default Event
