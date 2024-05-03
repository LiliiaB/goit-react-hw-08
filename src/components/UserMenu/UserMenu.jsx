import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { getUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

export const UserMenu = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  return (
    <div className={css.div}>
      <p>{user.name}</p>
      <button className={css.button} onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </div>
  );
};
