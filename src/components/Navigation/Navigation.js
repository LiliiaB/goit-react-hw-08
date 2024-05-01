import { useSelector } from "react-redux";
import { getIsLoggedIn } from "redux/auth/selectors";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav>
      <NavLink to="/">PhoneBook</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};
