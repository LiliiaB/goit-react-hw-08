import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/contacts/operations";
import { deleteContact } from "../../redux/contacts/operations";

import { getFilteredContacts } from "redux/contacts/selectors";

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
    <>
      <List>
        {contacts.map((contact) => (
          <item key={contact.id}>
            <NavLink to={`${contact.id}`}>{contact.name} </NavLink>
            <button
              type="button"
              onClick={() => delContact(contact.id)}
            ></button>
          </item>
        ))}
      </List>
    </>
  );
};
