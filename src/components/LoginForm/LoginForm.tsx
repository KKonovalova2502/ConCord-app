import { Formik, Form, Field, type FormikHelpers } from 'formik';
import css from './LoginForm.module.css';
import { login } from '../../redux/auth/operations.js';
import { useAppDispatch } from '../../hooks/redux.js';
import type { UserLoginValues } from '../../types/Auth.js';

const formValues: UserLoginValues = {
  email: '',
  password: '',
};

export default function LoginForm() {
  const dispatch = useAppDispatch();

  const handleSubmit = (values: UserLoginValues, actions: FormikHelpers<UserLoginValues>) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={formValues}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button className={css.loginBtn} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
}
