import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { ADD_FRIEND } from '../utils/mutations';
import Auth from '../utils/auth';
import { Button, Container, Jumbotron, Col, Accordion, Card } from 'react-bootstrap';
import EventList from '../components/EventList';
import FriendList from '../components/FriendList';



const Profile = () => {
    const { username: userParam } = useParams();
    const [addFriend] = useMutation(ADD_FRIEND);

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam, event: userParam }
    });

    const user = data?.me || data?.user || {};

    // redirect to personal profile page if username is the logged-in user's
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Redirect to="/profile" />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user?.username) {
        return (
            <h3 style={{ color: 'black', textAlign: 'center' }}>
                You need to be logged in to see this page. Use the navigation links above to sign up or log in!
            </h3>
        );
    }

    const handleClick = async () => {
        try {
            await addFriend({
                variables: { id: user._id }
            });
        } catch (e) {
            console.error(e);
        }
    };
    return (
        <Jumbotron fluid className='mb-5'>
            <Container id="profile">
                <div>
                    <Col>
                        <h1 >{user.username}</h1>
                        {userParam && (
                            <Button variant='secondary' className='friend-btn' onClick={handleClick}>
                                Add Friend
                            </Button>
                        )}
                    </Col>

                    {/* Created Events*/}
                    <Accordion>
                        <h2>Created Events</h2>
                        <Card>
                            <Accordion.Toggle variant="link" eventKey="0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body><EventList events={user.events} title={user.username} /></Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        {/* Friends */}
                        <h2>Friends</h2>
                        <Card>
                            <Accordion.Toggle variant="link" eventKey="1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body><FriendList
                                    username={user.username}
                                    friendCount={user.friendCount}
                                    friends={user.friends}
                                /></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
            </Container>
        </Jumbotron >

    );
};

export default Profile;