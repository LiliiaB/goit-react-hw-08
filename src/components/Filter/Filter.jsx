import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/contacts/contactsSlice";

export const Filter = () => {
  const dispatch = useDispatch();

  const saveFilterValue = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <label>
        Find contact by name
        <input name="filter" type="text" onChange={saveFilterValue}></input>
      </label>
    </>
  );
};
