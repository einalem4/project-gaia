import React from 'react';
import { Button, Form } from 'semantic-ui-react'

const CreateEvent = () => (
  <Form>
    <Form.Field>
      <label>Event Name</label>
      <input placeholder='Event Name' />
    </Form.Field>
    <Form.TextArea label='About' placeholder='Tell us about your event' />
    <Button type='submit'>Create Event</Button>
  </Form>
)


export default CreateEvent;