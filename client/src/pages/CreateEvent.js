import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_EVENT } from '../utils/mutations';
import { QUERY_EVENTS, QUERY_ME } from '../utils/queries';
import { Button, Form, Col } from 'react-bootstrap';

const CreateEvent = () => {
  const [eventText, setText] = useState('');
  const [addEvent] = useMutation(ADD_EVENT, {
    update(cache, { data: { addEvent } }) {
      try {
        // could potentially not exist yet, so wrap in a try...catch
        const { events } = cache.readQuery({ query: QUERY_EVENTS });
        cache.writeQuery({
          query: QUERY_EVENTS,
          data: { thoughts: [addEvent, ...events] }
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache, appending new thought to the end of the array
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, events: [...me.events, addEvent] } }
      });
    }
  });

  const handleChange = event => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
    }
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      // add thought to database
      await addEvent({
        variables: { eventText }
      });

      // clear form value
      setText('');
    } catch (e) {
      console.error(e);
    }
  };


  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group as={Col} controlId="formGridEvent">
        <Form.Label>Event Name</Form.Label>
        <Form.Control onChange={handleChange} value={eventText} type="text" placeholder="Enter Event Name" />
      </Form.Group>

      <Form.Group controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control onChange={handleChange} value={eventText} placeholder="Address 1" />
      </Form.Group>

      <Form.Group controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control onChange={handleChange} value={eventText} placeholder="Address 2" />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control onChange={handleChange} value={eventText} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control onChange={handleChange} value={eventText} as="select" defaultValue="State">
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

        <Form.Group as={Col} controlId="formGridZip" >
          <Form.Label>Zip</Form.Label>
          <Form.Control onChange={handleChange} value={eventText} maxLength="5" />
        </Form.Group>
      </Form.Row>
      <Button variant="primary" type="submit">
        Create Event
  </Button>
    </Form>
  );
};

export default CreateEvent;