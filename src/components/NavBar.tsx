import { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/NavBar.scss";
import { getUserName } from "../datastore/userDataStore";
import { emitter } from "../service/event";

export default function NavBar() {
  const [userName, setUserName] = useState("");
  emitter.once("signin-ok", () => {
    setUserName(getUserName());
  });
  return (
    <Navbar
      className="navbar"
      variant="dark"
      expand="lg"
      style={{ backgroundColor: "#005b47" }}
    >
      <Navbar.Brand className="navbar-brand" href="/dashboard">
        ToDoアプリ
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <NavDropdown
            title={userName}
            id="basic-nav-dropdown"
            className="navbar-dropdown"
          >
            <NavDropdown.Item href="profile">プロフィール</NavDropdown.Item>
            <NavDropdown.Item href="setting">設定</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="signout">ログアウト</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
