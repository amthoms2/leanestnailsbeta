import Form from '../Form'
import config from "../Form/config"

const BookingForm = ({handleClick, date, servicesList}) => {
  console.log('date', date)
  console.log('date', servicesList)

  const handleSubmit = (form) => {
    console.log('form in Booking Form', form)
  }

  return (
    <>
      <button onClick={handleClick}>Go back</button>
      <Form form={config} onSubmit={handleSubmit}/>
    </>
  )
}

export default BookingForm
