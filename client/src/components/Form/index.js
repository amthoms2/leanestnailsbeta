import { useState, useEffect } from 'react';
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

const Spinner = ({ loading }) => {
  return loading ? (
    <SpinnerImg alt="spinner gif" src="https://i.imgur.com/01yMDgZ.gif" />
  ) : null;
};

const Message = ({ status, text }) => {
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


const Form = ({ form, onSubmit, status }) => {
  // eslint-disable-next-line
  const [fields, setFields] = useState(
    form.fields.map(field => ({
      ...field,
      name: field.name || field.label,
      value: ''
    }))
  )

  useEffect(() => {
    if (status === 'success') {
      setFields(fields.map(field => ({ ...field, value: '' })))
    }
  }, [status, fields])

  const handleChange = (evt) => {
    const name = evt.target.getAttribute('name');
    const newFields = fields.map(field => {
      return field.name === name
        ? { ...field, value: evt.target.value }
        : field
    });
    setFields(newFields);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formData = fields.reduce((fields, field) => {
      return { ...fields, [field.name]: field.value }
    }, {})
    onSubmit(formData);
    // onSubmit(fields)
  }

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        {form.fields.map((field) => {
          return <Field key={field.name} field={field} onChange={handleChange} />;
        })}

        <FormBottom>
          {/* <FormButton type="submit">
            {form.config.buttonText || 'Submit'}
          </FormButton> */}
          <Button disabled={status === 'success'} type="submit" primary="true" dark="true" hover="false">
            {form.config.buttonText || 'Submit'}
          </Button>
          <Spinner loading={status === 'loading' && form.config.spinner}/>
        </FormBottom>
        <Message status={status} text={form.config.messages[status]} />
      </FormContainer>
    </>
  );
};

export default Form;
