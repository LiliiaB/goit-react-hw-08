import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/contacts/slice";
import css from "./Filter.module.css";

export const Filter = () => {
  const dispatch = useDispatch();

  const saveFilterValue = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <label className={css.label}>
        Find contact by name
        <input
          className={css.input}
          name="filter"
          type="text"
          onChange={saveFilterValue}
        ></input>
      </label>
    </>
  );
};
