import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getContacts, getError, getIsLoading } from "redux/contacts/selectors";
import { FallingLines } from "react-loader-spinner";

const ContactDetails = () => {
  const { id } = useParams();
  const contacts = useSelector(getContacts);

  const contact = contacts.find((contact) => contact.id === id);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  return (
    <>
      {isLoading && !error && (
        <FallingLines
          color="#0824AF"
          width="100"
          visible={true}
          ariaLabel="falling-lines-loading"
        />
      )}
      <p>Name: {contact.name}</p>
      <p>Phone: {contact.number}</p>
    </>
  );
};

export default ContactDetails;
