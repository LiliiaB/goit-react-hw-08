import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getContacts, getError, getIsLoading } from "redux/contacts/selectors";
import { FallingLines } from "react-loader-spinner";
import css from "./ContactDetails.module.css";

const ContactDetails = () => {
  const { id } = useParams();
  const contacts = useSelector(getContacts);

  const contact = contacts.find((contact) => contact.id === id);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  return (
    <div className={css.div}>
      {isLoading && !error && (
        <FallingLines
          color="#0824AF"
          width="100"
          visible={true}
          ariaLabel="falling-lines-loading"
        />
      )}
      <p>NAME: {contact.name}</p>
      <p>PHONE: {contact.number}</p>
    </div>
  );
};

export default ContactDetails;
