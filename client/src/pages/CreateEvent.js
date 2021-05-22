import React from 'react';
import { Button, Form } from 'semantic-ui-react'
import {DateInput,TimeInput} from 'semantic-ui-calendar-react';

class DateTimeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: '',
      time: '',
    };
  }

  handleChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  }

  render() {
    return (
      <Form class="ui form">
        <DateInput
          label="Date"
          name="date"
          placeholder="Date"
          value={this.state.date}
          iconPosition="left"
          onChange={this.handleChange}
        />
        <TimeInput
          label="Time"
          name="time"
          placeholder="Start Time"
          value={this.state.time}
          iconPosition="left"
          onChange={this.handleChange}
        />
      </Form>
    );
  }
}


const CreateEvent = () => (
  <Form>
    <Form.Field>
      <label>Event Name</label>
      <input placeholder='Event Name' />
    </Form.Field>
    <DateTimeForm />
    <Form.TextArea label='About' placeholder='Tell us about your event' />
    <Button type='submit'>Create Event</Button>
  </Form>
)


export default CreateEvent;