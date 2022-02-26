

function Form({handleClick, date, servicesList}) {
  console.log('date',date)
  console.log('services',servicesList)
  return (
    <>
      <button onClick={handleClick}>Go back</button>
    </>
  )
}

export default Form
