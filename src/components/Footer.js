import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container-fluid">
      <p>
        <a href="https://github.com/Michaelplant2/Mimoville">GitHub</a>
        <a href="#">Slack</a> 
      </p>
      <p>
        <Link to={`/admin`}>Admin</Link>
        <Link to={`/create`}>Create</Link>
      </p>
    </footer>
  );
};

export default Footer;
