import { useMutation } from '@apollo/client';
import React, {useState} from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { ADD_COMMENT} from '../../utils/mutations';
// import Auth from '../../utils/auth'



function Event() {
    const [commentText, setCommentText] = useState('');
    const [comment, {error}] = useMutation(ADD_COMMENT);

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

        <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label></Form.Label>
        <Form.Control onChange={handleChange} as="textarea" rows={3} placeholder='Leave Comment Here'/>
        <br/>
        <Button variant='primary' type='submit'>Post Comment</Button>
        </Form.Group>
        </Form>
    
        </>
    )
}

export default Event
