import { useMutation } from '@apollo/client';
import React, {useState} from 'react';
import { Card, Button, Form, Container, Row, Col } from 'react-bootstrap';
import { ADD_COMMENT, ADD_EVENT} from '../../utils/mutations';
// import Auth from '../../utils/auth'



function Event() {
    const [commentText, setCommentText] = useState('');
    const [comment, {error}] = useMutation(ADD_COMMENT);
    const eventData = useMutation(ADD_EVENT);

    const handleChange = event => {
        if (event.target.value.length > 0){
            setCommentText(event.target.value)
        }
        console.log(commentText)
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
        <>
        <Card id='card2' style={{ width: '18rem' }}>
        <Card.Title>{eventData.name}</Card.Title>
        <Card.Text>📆 Date: {eventData.date}</Card.Text>
        <Card.Text>🕓 Time:{eventData.time}</Card.Text>
        <Card.Text>📍 Address:{eventData.address1} {eventData.city},{eventData.state} {eventData.zip}</Card.Text>
         <Card.Img variant="top" src="holder.js/100px180" />
         <Card.Title>🗣 Event Organizer: </Card.Title>
         <Card.Body>
            <Card.Text>
            {eventData.description}
             </Card.Text>
               <Button id='rsvp-btn' variant="success">RSVP</Button>
            </Card.Body>
        </Card>

        <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label></Form.Label>
        <Form.Control onChange={handleChange} as="textarea" rows={3} placeholder='Leave Comment Here'/>
        <br/>
        <Button variant='primary' type='submit'>Post Comment</Button>
        </Form.Group>
        </Form>

        <Card body>{commentText}</Card>
    
        </>
    )
}

export default Event
