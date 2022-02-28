import { useState } from 'react'
import Form from '../Form'
import config from "../Form/config"

const BookingForm = ({handleClick, date, servicesList}) => {
  const [status, setStatus] = useState('')
  console.log('date', date)
  console.log('services', servicesList)

  const handleSubmit = form => {
    console.log('Loading rerender')
    setStatus('loading')

    setTimeout(() => {
      console.log('First sucess re-render')
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
