import { useMutation } from '@apollo/client';
import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';


function Event() {
    // const {comment} = useMutation(ADD_COMMENT);

    // const handleFormSubmit = async event => {
    //     event.preventDefault();
    //     try {
    //         const mutationResponse = await comment ({variables: {username, commentText}})
    //         const token = mutationResponse.data.comment.token;
    //         Auth.comment(token);
    //     } catch (e) {
    //         console.log(e)
    //     }
    // };
    return (
        <>
        <Card style={{ width: '18rem' }}>
        <Card.Title>Event Name</Card.Title>
        <Card.Text>📆 Date:</Card.Text>
        <Card.Text>🕓 Time:</Card.Text>
        <Card.Text>📍 Address:</Card.Text>
         <Card.Img variant="top" src="holder.js/100px180" />
         <Card.Title>🗣 Event Organizer: </Card.Title>
         <Card.Body>
            <Card.Text>
                Event Description
             </Card.Text>
               <Button variant="success">RSVP</Button>
            </Card.Body>
        </Card>
        
        <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label></Form.Label>
        <Form.Control as="textarea" rows={3} placeholder='Leave Comment Here'/>
        <br/>
        <Button variant='primary' type='submit'>Post Comment</Button>
        </Form.Group>
        </Form>
        </>
    )
}

export default Event
