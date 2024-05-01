import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";

const initialValues = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label>
            Email
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="span" />
          </label>
          <label>
            Password
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="span" />
          </label>
          <button type="submit">Log in</button>
        </Form>
      </Formik>
    </>
  );
};
