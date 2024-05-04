import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { toast } from "react-toastify";
import css from "./ContactForm.module.css";
import { getContacts } from "../../redux/contacts/selectors";

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required")
    .matches(
      "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
      "Name must contain letters"
    ),
  number: yup
    .string()
    .required("Phone number is required")
    .matches(
      "\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",
      "Phone number must contain digits"
    ),
});

const initialValues = {
  name: "",
  number: "",
};

export const ContactForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, { resetForm }) => {
    const newName = values.name.toLowerCase();
    const nameExist = contacts
      .map((contact) => contact.name.toLowerCase())
      .some((el) => el === newName);

    if (nameExist) {
      toast.error("This name already exists");
    }

    dispatch(addContact(values));
    resetForm();
    closeModal();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          NAME
          <Field className={css.field} type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </label>
        <label className={css.label}>
          PHONE NUMBER
          <Field className={css.field} type="tel" name="number" />
          <ErrorMessage className={css.error} name="number" component="span" />
        </label>
        <button className={css.button} type="submit">
          ADD CONTACT
        </button>
      </Form>
    </Formik>
  );
};
