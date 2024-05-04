import { Filter } from "../../components/Filter/Filter";
import { ContactList } from "../../components/ContactList/ContactList";
import { ButtonAdd } from "../../components/ButtonAdd/ButtonAdd";
import { Modal } from "../../components/Modal/Modal";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { FallingLines } from "react-loader-spinner";
import css from "./ContactsPage.module.css";
import { getError, getIsLoading } from "../../redux/contacts/selectors";

const ContactsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  return (
    <div className={css.div}>
      <Filter />
      {isLoading && !error && (
        <FallingLines
          color="#0824AF"
          width="100"
          visible={true}
          ariaLabel="falling-lines-loading"
        />
      )}
      <ContactList />
      <Outlet />
      {isModalOpen && <Modal closeModal={setIsModalOpen} />}
      <ButtonAdd openModal={setIsModalOpen} />
    </div>
  );
};

export default ContactsPage;
