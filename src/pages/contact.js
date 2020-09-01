import React from 'react'
import { Form, Input, Button } from 'antd'

const Contact = () => {
  const handleChange = e => {
    console.log(e.target.name, e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    console.log(e.target.value)
  }
  return (
    <div>
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Name"
          onChange={handleChange}
          name="name"
          required
        />
        <Button htmlType="submit">Submit</Button>
      </form>
    </div>
  )
}

export default Contact
