import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return <><h1>Nav</h1><div><Link to="" >Patch notes</Link><Link to='tc'>Talent Calculator</Link><Link to='items'>Example Items</Link></div></>;
};

export default NavBar;
