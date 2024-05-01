import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { getUser } from "../../redux/auth/selectors";

export const UserMenu = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  return (
    <>
      <p>{user.name}</p>
      <button onClick={() => dispatch(logOut())}>Log out</button>
    </>
  );
};
