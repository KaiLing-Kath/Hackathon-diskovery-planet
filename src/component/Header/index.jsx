import { Nav, NavLink, Bars, NavMenu, Title } from "./headerElements";

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
