import React from 'react';
import { Button, Form } from 'semantic-ui-react'
import { useState } from "react";
import { DatePicker } from "antd";
import "antd/dist/antd.css";

function AntDatepicker() {
  const [date, setDate] = useState(new Date());

  function onChange(date, dateString) {
    setDate(date);
  }

  return <DatePicker onChange={onChange} />;
}

const CreateEvent = () => (
  <Form>
    <Form.Field>
      <label>Event Name</label>
      <input placeholder='Event Name' />
    </Form.Field>
    <AntDatepicker/>
    <Form.TextArea label='About' placeholder='Tell us about your event' />
    <Button type='submit'>Create Event</Button>
  </Form>
)


export default CreateEvent;