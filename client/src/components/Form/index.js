import { useState } from 'react';

const Form = ({ form }) => {

  const [fields, setFields] = useState([]);

  const Field = ({ field, onChange }) => {
    const { label, ...attributes } = field;
    //attributes takes in remaining object props and vals
    return (
      <>
        <label>{label}</label>
        {(() => {
          switch (attributes.type) {
            case 'textarea':
              return <textarea onChange={onChange} {...attributes} />
            default:
              return <input onChange={onChange} {...attributes} />
          }
        })()}
      </>
    )
  }

  return (
    <>
      <form>
        {console.log('form', form)}
        {/* {form.fields.map((field) => {
          return field.type === 'textarea' ? (
            <>
              <label>{field.label}</label>
              <textarea />
            </>
          ) : (
            <>
              <label>{field.label}</label>
              <input type={field.type} />
            </>
          );
        })} */}
        {form.fields.map(field => {
          return <Field field={field} />
        })}
      </form>
    </>
  );
};

export default Form;
