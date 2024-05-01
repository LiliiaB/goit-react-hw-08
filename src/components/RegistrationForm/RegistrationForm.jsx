import { useDispatch } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { register } from "../../redux/auth/operations";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      register({
        name: values.name,
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
            Name
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="span" />
          </label>
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
          <button type="submit">Sign up</button>
        </Form>
      </Formik>
    </>
  );
};
