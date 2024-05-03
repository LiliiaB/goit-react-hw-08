import { BsFillPersonPlusFill } from "react-icons/bs";
import css from "./ButtonAdd.module.css";

export const ButtonAdd = ({ openModal }) => {
  return (
    <button className={css.button} onClick={() => openModal(true)}>
      <BsFillPersonPlusFill className={css.icon} />
      Add new contact
    </button>
  );
};
