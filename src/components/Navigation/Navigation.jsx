import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getIsLoggedIn } from "../../redux/auth/selectors";

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav>
      <NavLink to="/">PhoneBook</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};
