import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";
import { deleteContact } from "../../redux/contactsOps";

export const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <div className={css.container}>
      <div className={css.box}>
        <p>
          <FaUser className={css.icon} />
          {name}
        </p>

        <p>
          <FaPhone className={css.icon} />
          {number}
        </p>
      </div>
      <button
        className={css.button}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
};
export default Contact;
