import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { getContacts } from "redux/contacts/selectors";
import { toast } from "react-toastify";

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
      <Form>
        <label>
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </label>
        <labelabel>
          Phone number
          <Field type="tel" name="number" />
          <ErrorMessage name="number" component="span" />
        </labelabel>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
