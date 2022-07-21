import { Nav, NavLink, Bars, NavMenu, Title } from "./headerElements";
import React from "react";
<<<<<<< HEAD

=======
>>>>>>> 6f971850f7265b591a3303f614576fadc7e6fbb7
const Header = () => {
  return (
    <>
      <Nav>
        <Bars />
        <Title>Diskovery Planet</Title>
        <NavMenu>
          <NavLink to="/" activestyle="true">
            Main Page
          </NavLink>
          <NavLink to="/miniquizz" activestyle="true">
            Mini Quizz
          </NavLink>
          <NavLink to="/forum" activestyle="true">
            Forum
          </NavLink>
          <NavLink to="/potd" activestyle="true">
            POTD
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Header;
