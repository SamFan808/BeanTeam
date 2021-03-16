import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Header, Grid, Image } from "semantic-ui-react";
import FYB_Logo from "../images/FYB_Logo.png";

function NavBar() {
  const location = useLocation();
  return (
    <>
      <Header className="navHeader">
        <Menu fixed="top">
          <Menu.Item className="navBar" as="a" header>
            <Image
              src={FYB_Logo}
              className="fyblue"
              size="small"
              alt="logo"
              style={{ height: 30, width: 'auto' }}

              // src={FYBlogo}
              // style={{ marginRight: "1.5em" }}
            />
          </Menu.Item>
          <Menu.Item className="navItem">
            {" "}
            <Link
              to="/main"
              className={
                location.pathname === "/main" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              to="/videos"
              className={
                location.pathname === "/videos" ? "nav-link active" : "nav-link"
              }
            >
              My Videos
            </Link>
          </Menu.Item>
          <Menu.Item
            className="navItem"
            action="logout"
            method="post"
            as="form"
          >
            <Link
              to="/"
              className={
                location.pathname === "/" ? "nav-link active" : "nav-link"
              }
            >
              Logout
            </Link>
          </Menu.Item>
        </Menu>
        <Grid.Row>
          {/* <h4 class="center-align">Welcome {props.formObject.firstName} {props.formObject.lastName}, time to work!</h4> */}
        </Grid.Row>
      </Header>
    </>
  );
}

export default NavBar;
