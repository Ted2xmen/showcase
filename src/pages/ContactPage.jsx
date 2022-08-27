import React, { useState } from 'react'
import PageLayout from '../components/Layout/PageLayout'
import { useSelector, useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { setFormData } from '../redux/formSlice'
import useInfo from '../hooks/useInfo'

const ContactPage = () => {
  const dispatch = useDispatch()
  const msg = useInfo('error', 'Something went wrong')
  const title = useSelector((state) => state.form.title)
  //   const formData = useSelector((state) => state.form.formData) do not send everything to the redux store
  const messageFromStore = useSelector((state) => state.form.formData.message)

  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (name && message) {
      dispatch(setFormData({ id: nanoid(), name, message }))
    }
    setName('')
    setMessage('')
  }

  return (
    <PageLayout>
      <div className="mx-auto flex max-w-md flex-col">
        <h2> {title} </h2>
        <h3>useInfo hook: {msg} </h3>
        <h4> preview: {messageFromStore} </h4>
        <h3>{useInfo('warning', 'Sometdsfsdf')}</h3>
        <input
          name="name"
          value={name}
          onChange={(event) => {
            setName(event.target.value)
          }}
          className="mb-4"
          type="text"
          placeholder="Name"
        />
        <textarea
          value={message}
          onChange={(event) => {
            setMessage(event.target.value)
          }}
          name="message"
          id="msg"
          cols="10"
          rows="5"
          placeholder="Message"></textarea>
        <button onClick={handleFormSubmit}>send</button>
      </div>
    </PageLayout>
  )
}

export default ContactPage
