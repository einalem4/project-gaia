import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Container, Form, FormControl, InputGroup, Jumbotron } from 'react-bootstrap';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_SERCH_EVENTS } from '../../utils/queries';

const Search = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleChange = event => {
        setSearchValue(event.target.value);
    }

    const handleSearchSubmit = async event => {
        event.preventDefault();
        return <Redirect to="/results" />;
    }

    return(
        <Jumbotron className='mb-5'>
            <Container id='search' className='d-flex flex-column justify-content-center align-items-center' fluid>
                <div>
                    <h2>cleaning the world,<br /> one community at a time</h2>
                    <p>Find a community cleanup near you</p>
                    <Form>
                        <InputGroup className='d-flex justify-content-center'>
                            <FormControl
                                type='text'
                                placeholder='Enter city to find events near you'
                                aria-label='Search by Zipcode'
                                value={searchValue}
                                onChange={handleChange}
                                onSubmit={handleSearchSubmit}
                            />
                            <InputGroup.Append>
                                <Button variant='secondary' className='search-btn' type='submit'>Search</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form>
                </div>
            </Container>
        </Jumbotron>
    );
};

export default Search;