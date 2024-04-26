import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

export const SearchBox = () => {
  const value = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const onChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div>
      <p className={css.label}>Find contacts by name</p>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default SearchBox;
