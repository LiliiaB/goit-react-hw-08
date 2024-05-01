import { BsFillPersonPlusFill } from "react-icons/bs";

export const ButtonAdd = ({ openModal }) => {
  return (
    <button onClick={() => openModal(true)}>
      <BsFillPersonPlusFill />
      Add new contact
    </button>
  );
};
