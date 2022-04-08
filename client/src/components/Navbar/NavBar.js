import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Nav>
        <NavMenu>
          <NavLink to="/posts" activeStyle>
            Posts
          </NavLink>
          <NavLink to="/addpost" activeStyle>
            Add Post
          </NavLink>
          <NavLink to="/aboutme" activeStyle>
            About Me
          </NavLink>
          <NavLink to="/contactme" activeStyle>
            Contact Me
          </NavLink>
        </NavMenu>
      </Nav>

      {/* <nav className="item">
        <ul className="ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Blogs</Link>
          </li>
          <li>
            <Link to="/addpost">Create Blog</Link>
          </li>
          <li>
            <Link to="/aboutme">About</Link>
          </li>
          <li>
            <Link to="/contactme">Contact</Link>
          </li>
        </ul>
      </nav> */}
    </div>
  );
};

export default NavBar;
