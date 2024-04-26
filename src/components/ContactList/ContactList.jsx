import css from "./ContactList.module.css";
import { Contact } from "../Contact/Contact";
import { selectContacts } from "../../redux/contactsSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";
import { deleteContact } from "../../redux/contactsOps";

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => {
        return (
          <li key={contact.id} className={css.item}>
            <Contact data={contact} onDelete={() => handleDelete(contact.id)} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
