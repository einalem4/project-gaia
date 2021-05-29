import React from 'react';
// import { Redirect, useParams } from 'react-router-dom';
// import { useQuery, useMutation } from '@apollo/react-hooks';
// import { QUERY_USER, QUERY_ME } from '../utils/queries';
// import { ADD_FRIEND } from '../utils/mutations';
// import Auth from '../utils/auth';
import { Button, Image, Container, Jumbotron, Col } from 'react-bootstrap';


const Profile = () => {
    // const { username: userParam } = useParams();
    // const [addFriend] = useMutation(ADD_FRIEND);

    // const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    //     variables: { username: userParam }
    // });

    // const user = data?.me || data?.user || {};

    // // redirect to personal profile page if username is the logged-in user's
    // if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    //     return <Redirect to="/profile" />;
    // }

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    // if (!user?.username) {
    //     return (
    //         <h4>
    //             You need to be logged in to see this page. Use the navigation links above to sign up or log in!
    //         </h4>
    //     );
    // }

    // const handleClick = async () => {
    //   try {
    //     await addFriend({
    //       variables: { id: user._id }
    //     });
    //   } catch (e) {
    //     console.error(e);
    //   }
    // };
    return (
        <Jumbotron fluid className='mb-5'>
            <Container id="profile">
                <div>
                    <Col>
                        <h1 >Username</h1>
                        <Button variant='secondary' type='submit' className='friend-btn'>
                            Add Friend
                     </Button>
                    </Col>
                    <Col>
                    </Col>
                    <Col>
                        <h2>Created Events</h2>
                    </Col>
                    <Col>
                        <h2>Friends</h2>
                    </Col>
                </div>
            </Container>
        </Jumbotron>

    );
};

export default Profile;