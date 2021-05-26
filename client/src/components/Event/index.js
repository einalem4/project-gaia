import React from 'react';
import { Card, Button } from 'react-bootstrap';


function Event() {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Title>Event Name</Card.Title>
        <Card.Text>Date:</Card.Text>
        <Card.Text>Time:</Card.Text>
        <Card.Text>Address:</Card.Text>
         <Card.Img variant="top" src="holder.js/100px180" />
         <Card.Title>Event Organizer: </Card.Title>
         <Card.Body>
            <Card.Text>
                Event Description
             Some quick example text to build on the card title and make up the bulk of
              the card's content.
             </Card.Text>
               <Button variant="primary">RSVP</Button>
            </Card.Body>
        </Card>
    )
}

export default Event
