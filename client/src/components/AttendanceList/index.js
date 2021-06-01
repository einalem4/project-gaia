import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';

const AttendanceList = ({attendees}) => {
    return(
        <Container>
            {attendees && 
            attendees.map(attendee => (
                <Card key={attendee._id}>
                    <Link to={`/profile/${attendee._id}`}>
                        <Card.Img src={attendee.image} />
                        <Card.Title>
                            {attendee.username}
                        </Card.Title>
                    </Link>
                </Card>
            ))}
        </Container>
    );
};

export default AttendanceList;
