import { useState } from 'react';
import {
  FormContainer,
  Input,
  TextArea,
  MessageContainer,
  SpinnerImg,
  FormBottom,
  Button
  // FormButton,
} from './FormElements';

// eslint-disable-next-line
const Spinner = ({ loading }) => {
  return loading ? (
    <SpinnerImg alt="spinner gif" src="https://i.imgur.com/01yMDgZ.gif" />
  ) : null;
};
// eslint-disable-next-line
const Message = ({ status = 'success', text }) => {
  return status && status !== 'loading' ? (
    <MessageContainer status={status}>{text}</MessageContainer>
  ) : null;
};

const Field = ({ field, onChange }) => {

  const { label, ...attributes } = field
  // console.log('updated field', field)
  // console.log('type', attributes.type)
  //attributes takes in remaining object props and vals
  return (
    <>
      <label>{label}</label>
      {(() => {
        switch (attributes.type) {
          case 'textarea':
            return <TextArea name={label} onChange={onChange} {...attributes} />
          default:
            return <Input name={label} onChange={onChange} {...attributes} />
        }
      })()}
    </>
  );
};


const Form = ({ form, onSubmit }) => {
  // eslint-disable-next-line
  const [fields, setFields] = useState(
    form.fields.map(field => ({
      ...field,
      name: field.name || field.label,
      value: ''
    }))
  )

  const handleChange = (evt) => {
    console.log('evt', evt)
    const name = evt.target.getAttribute('name');
    console.log('name', name)
    const newFields = fields.map(field => {
      return field.name === name
        ? { ...field, value: evt.target.value }
        : field
    });
    setFields(newFields);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(fields)
  }

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
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
        {form.fields.map((field) => {
          return <Field field={field} onChange={handleChange} />;
        })}

        <FormBottom>
          {/* <FormButton type="submit">
            {form.config.buttonText || 'Submit'}
          </FormButton> */}
          <Button type="submit" primary="true" dark="true" hover="false">
            {form.config.buttonText || 'Submit'}
          </Button>

          {/* <Spinner loading={status === 'loading' && spinner}/> */}
        </FormBottom>
        {/* <Message status={status} text={messages[status]} /> */}
      </FormContainer>
    </>
  );
};

export default Form;
