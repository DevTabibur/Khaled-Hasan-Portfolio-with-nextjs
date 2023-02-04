import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Container, Row } from "reactstrap";
const Nav = () => {
  const [sidebar, setSidebar] = useState(false);

  function closeSidebar() {
    setSidebar(!sidebar);
    document.querySelector(".navbar").classList.remove("openSidebar");
  }

  return (
    <div className={`navbar`} id="togglebtn">
      <div className="responsive-btn">
        <a className="btn-back" onClick={closeSidebar}>
          <h5>back</h5>
        </a>
      </div>
      <ul className="main-menu">
        <li className="text-dark text-2xl  font-bold mr-4">
          <Link href={"/"}>HOME</Link>
        </li>
        <li className="text-dark text-2xl font-bold mr-4">
          <Link href={"#portfolio"}>PORTFOLIO</Link>
        </li>
        <li className="text-dark text-2xl font-bold mr-4">
          <Link href={"#services"}>SERVICES</Link>
        </li>
        <li className="text-dark text-2xl font-bold mr-4">
          <Link href={"#contact"}>CONTACT</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
