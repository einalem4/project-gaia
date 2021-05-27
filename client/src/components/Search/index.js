import React from 'react';
import { Button, Container, FormControl, InputGroup, Jumbotron } from 'react-bootstrap';

const Search = () => {
    return(
        <Jumbotron>
            <Container id='search' className='d-flex flex-column justify-content-center' fluid>
                <h2>cleaning the world,<br /> one community at a time</h2>
                <p>Find a community cleanup near you</p>
                <InputGroup className='d-flex justify-content-center'>
                    <FormControl
                        placeholder="Enter Zipcode to find events near you"
                        aria-label="Search by Zipcode"
                    />
                    <InputGroup.Append>
                        <Button variant='secondary' className='search-btn'>Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Container>
        </Jumbotron>
    );
};

export default Search;