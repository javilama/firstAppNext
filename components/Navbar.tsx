import React from "react";
import ActiveLink from "./ActiveLink"
import styles from './Navbar.module.css'

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  }
];

interface Props{
  text:string;
  href:string;
}

function Navbar() {
  return (
    <nav className={styles.menu_container}>

      {menuItems.map(({ text, href }) => (
        <ActiveLink key={href} href={href} text={text} />
      ))}

    </nav>
  );
}

export default Navbar
