import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'

const Contact = () => {
  const [state, setState] = useState({ name: '' })
  console.log(state)
  const handleChange = e => {
    const { name, value } = e.target
    setState(prevValue => {
      return {
        ...prevValue,
        [name]: value,
      }
    })
    console.log(e.target.name, e.target.value)
  }
  const handleSubmit = e => {
    console.log(state)
  }
  return (
    <div>
      <h1>Contact Us</h1>

      <form
        onSubmit={handleSubmit}
        name="contactForm"
        action="/success"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contactForm"></input>
        <Input
          placeholder="Name"
          onChange={handleChange}
          name="name"
          value={state.name}
          required
        />
        <Button htmlType="submit">Submit</Button>
      </form>
    </div>
  )
}

export default Contact
