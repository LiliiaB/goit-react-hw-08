import { useSelector } from "react-redux";
import { getIsLoggedIn, getIsRefreshing } from "../../redux/auth/selectors";
import { AuthNav } from "../AuthNav/AuthNav";
import { UserMenu } from "../UserMenu/UserMenu";
import { Navigation } from "../Navigation/Navigation";
import css from "./Header.module.css";

export const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsRefreshing);

  return (
    <>
      <div className={css.div}>
        <Navigation />
        {isLoggedIn && !isRefreshing && <UserMenu />}
        {!isLoggedIn && !isRefreshing && <AuthNav />}
      </div>
    </>
  );
};
