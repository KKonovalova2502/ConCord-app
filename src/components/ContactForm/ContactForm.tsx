import { Formik, Form, Field, ErrorMessage, type FormikHelpers } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';

import style from './ContactForm.module.css';
import { addContact } from '../../redux/contacts/operations';
import { useAppDispatch } from '../../hooks/redux';

interface FormValues {
    contactName: string;
  contactNumber: string;
}
  
const formValues: FormValues = {
  contactName: '',
  contactNumber: '',
}

const FeedbackSchema = Yup.object().shape({
  contactName: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
  contactNumber: Yup.string()
    .matches(/^\+?\d{10,15}$/, 'Enter a valid phone number')
    .required('Required'),
});

const ContactForm = () => {
  const dispatch = useAppDispatch();

  const nameFieldId = useId();
  const telFieldId = useId();

  const handleSubmit = (values:FormValues, actions:FormikHelpers<FormValues>) => {
    dispatch(
      addContact({
        name: values.contactName,
        number: values.contactNumber,
      }),
    );
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={formValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={style.form}>
        <div className={style.fieldgroup}>
          <label className={style.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={style.input}
            type="text"
            name="contactName"
            id={nameFieldId}
          ></Field>
          <ErrorMessage
            className={style.error}
            name="contactName"
            component="span"
          ></ErrorMessage>
        </div>
        <div className={style.fieldgroup}>
          <label className={style.label} htmlFor={telFieldId}>
            Number
          </label>
          <Field
            className={style.input}
            type="tel"
            name="contactNumber"
            id={telFieldId}
          ></Field>
          <ErrorMessage
            className={style.error}
            name="contactNumber"
            component="span"
          ></ErrorMessage>
        </div>
        <button className={style.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
