import { Form, Formik, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must not exceed 50 characters"),
  number: Yup.string()
    .required("Number is required")
    .min(3, "Number must be at least 3 characters")
    .max(50, "Number must not exceed 50 characters"),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <label name="name" className={css.label} htmlFor={nameFieldId}>
          Name
        </label>
        <Field className={css.field} type="text" name="name" id={nameFieldId} />
        <ErrorMessage name="name" component="span" className={css.error} />
        <label className={css.label} name="number" htmlFor={numberFieldId}>
          Number
        </label>
        <Field
          className={css.field}
          type="number"
          name="number"
          id={numberFieldId}
        />
        <ErrorMessage name="number" component="span" className={css.error} />
        <button className={css.button} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
