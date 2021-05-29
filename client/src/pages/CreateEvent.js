import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_EVENT } from '../utils/mutations';
import { QUERY_USER_EVENTS } from '../utils/queries';
import { Button, Form, Col, Container, Jumbotron } from 'react-bootstrap';

const CreateEvent = () => {
  const [eventData, setText] = useState('');
  const [addEvent] = useMutation(ADD_EVENT, {
    update(cache, { data: { addEvent } }) {
      try {
        // could potentially not exist yet, so wrap in a try...catch
        const { events } = cache.readQuery({ query:QUERY_USER_EVENTS });
        cache.writeQuery({
          query: QUERY_USER_EVENTS,
          data: { events: [addEvent, ...events] }
        });
      } catch (e) {
        console.error(e);
      }
    }
  });

  const handleChange = (event) => {
    const { name, value } = event.target
    setEventData({ ...eventData, [name]: value })
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      // add event to database
      await addEvent({
        variables: { eventData }
      });

      // clear form value
      setEventData('');
    } catch (e) {
      console.error(e);
    }
  };


  return (
    <Container className='mb-5'>
      <Jumbotron id="create" fluid>
        <div>
          <h1 >Create Event</h1>
          <p>
            Fill in the information below to let everyone know you are hosting a clean up!
        </p>
          <Form onSubmit={handleFormSubmit}>
            {/* Event Name */}
            <Form.Group as={Col} >
              <Form.Label>Event Name</Form.Label>
              <Form.Control name="name" onChange={handleChange} type="text" placeholder="Event Name" />
            </Form.Group>

            {/* Date Picker */}
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="date"
                name="date"
                id="date"
              />
            </Form.Group>

            {/* time */}
            <Form.Group>
              <Form.Label>Time</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="time"
                name="time"
                id="time"
              />
            </Form.Group>

            {/* Address */}
            <Form.Group as={Col}>
              <Form.Label>Address</Form.Label>
              <Form.Control name="address1" onChange={handleChange} placeholder="Address 1" />
            </Form.Group>

            {/* City */}
            <Form.Group as={Col}>
              <Form.Label>City</Form.Label>
              <Form.Control name="city" onChange={handleChange} placeholder="City" />
            </Form.Group>

            {/* State*/}
            <Form.Group as={Col}>
              <Form.Label>State</Form.Label>
              <Form.Control name="state" onChange={handleChange} as="select" defaultValue="State">
                <option>State</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </Form.Control>
            </Form.Group>

            {/* Zip */}
            <Form.Group as={Col}>
              <Form.Label>Zip</Form.Label>
              <Form.Control name="zip" onChange={handleChange} placeholder="Zip" maxLength="5" />
            </Form.Group>

            {/* Event Description */}
            <Form.Group>
              <Form.Label>Event Description</Form.Label>
              <Form.Control name="description" onChange={handleChange} placeholder="Tell us about your event" as="textarea" rows={8} />
            </Form.Group>
            <Button variant='secondary' type='submit' className='create-btn'>
              Create Event
          </Button>
          </Form>
        </div>
      </Jumbotron>
    </Container>
  );
}

export default CreateEvent;