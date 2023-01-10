import classes from "./Header.module.css";
import MainNavigation from "./MainNavigation";


function Header() {
  return (
    <div className={classes.container}>
      <div className={classes.navigation}>
        <MainNavigation />
      </div>
    </div>
  );
}

export default Header;
