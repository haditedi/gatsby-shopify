import React, { useState } from 'react'
import { Input, Button } from 'antd'
import { Container } from '~/utils/styles'

const Contact = () => {
  const [state, setState] = useState({ name: '', email: '', message: '' })
  // console.log(state)

  const handleChange = e => {
    const { name, value } = e.target
    setState(prevValue => {
      return {
        ...prevValue,
        [name]: value,
      }
    })
  }
  const handleSubmit = e => {
    // console.log(state)
  }
  return (
    <Container>
      <h1>Contact Us</h1>

      <form
        style={{ maxWidth: '500px', width: '100%' }}
        onSubmit={handleSubmit}
        name="contactForm"
        action="/success"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contactForm"></input>
        <Input
          style={{ marginBottom: '10px' }}
          placeholder="Name"
          onChange={handleChange}
          name="name"
          value={state.name}
          required
        />
        <Input
          style={{ marginBottom: '10px' }}
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={state.email}
          required
        />
        <Input.TextArea
          style={{ marginBottom: '10px' }}
          rows={5}
          placeholder="Message"
          onChange={handleChange}
          name="message"
          value={state.message}
          required
        />
        <Button type="primary" shape="round" htmlType="submit">
          Submit
        </Button>
      </form>
    </Container>
  )
}

export default Contact
