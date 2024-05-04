import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { deleteContact, fetchContacts } from "../../redux/contacts/operations";
import { NavLink } from "react-router-dom";
import css from "./ContactList.module.css";
import { getFilteredContacts } from "../../redux/contacts/selectors";
import { BsXLg } from "react-icons/bs";
export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(getFilteredContacts);

  function delContact(id) {
    dispatch(deleteContact(id));
  }

  return (
    <ul className={css.ul}>
      {contacts.map((contact) => (
        <li className={css.li} key={contact.id}>
          <NavLink className={css.link} to={`${contact.id}`}>
            {contact.name}
          </NavLink>
          <button
            className={css.button}
            type="button"
            onClick={() => delContact(contact.id)}
          >
            <BsXLg />
          </button>
        </li>
      ))}
    </ul>
  );
};
