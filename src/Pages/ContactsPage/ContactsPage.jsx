import { Filter } from "../../components/Filter/Filter";
import { ContactList } from "../../components/ContactList/ContactList";
import { ButtonAdd } from "../../components/ButtonAdd/ButtonAdd";
import { Modal } from "../../components/Modal/Modal";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FallingLines } from "react-loader-spinner";
import css from "./ContactsPage.module.css";
import { getError, getIsLoading } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";

const ContactsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
