import { Formik, Form, Field, type FormikHelpers } from 'formik';
import css from './RegistrationForm.module.css';
import { register } from '../../redux/auth/operations';
import { useAppDispatch } from '../../hooks/redux';
import type { UserRegistrationValues } from '../../types/Auth';

const formValues : UserRegistrationValues ={
  name: '',
  email: '',
  password: '',
}

export default function RegistrationForm() {
  const dispatch = useAppDispatch();

  const handleSubmit = (values:UserRegistrationValues, actions:FormikHelpers<UserRegistrationValues>) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={formValues}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field type="text" name="name" />
        </label>
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button className={css.registerBtn} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}
