import { useState } from 'react'
import Form from '../Form'
import config from "../Form/config"

const BookingForm = ({handleClick, date, servicesList}) => {
  const [status, setStatus] = useState('')
  console.log('date', date)
  console.log('date', servicesList)

  const handleSubmit = form => {
    setStatus('loading')

    setTimeout(() => {
      setStatus('success')
    }, 3000)
  }

  return (
    <>
      <button onClick={handleClick}>Go back</button>
      <Form form={config} onSubmit={handleSubmit} status={status}/>
    </>
  )
}

export default BookingForm
