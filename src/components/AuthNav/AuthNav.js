import { NavLink } from "react-router-dom";

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/login">Log in</NavLink>
      <NavLink to="/register">Sign up</NavLink>
    </div>
  );
};
