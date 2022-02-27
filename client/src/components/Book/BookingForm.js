import Form from '../Form'
import config from "../Form/config"

const BookingForm = ({handleClick, date, servicesList}) => {
  console.log('date',date)
  console.log('services',servicesList)
  return (
    <>
      <button onClick={handleClick}>Go back</button>
      <Form form={config} />
    </>
  )
}

export default BookingForm
