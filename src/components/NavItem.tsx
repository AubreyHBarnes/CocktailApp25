import Link from "next/link";
import React, { JSX } from "react";

type NavItemProps = {
    
        text: string,
        href: string, 
        active: boolean
}

const NavItem: React.FunctionComponent<NavItemProps> = (props: NavItemProps): JSX.Element => {
  return (
    <Link href={props.href} className={`nav__item ${
        props.active ? "active" : ""
      } mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500`}>
      {props.text}
    </Link>
  );
};

export default NavItem;