import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Image, Menu } from "semantic-ui-react";

import styles from "./Navbar.module.css";

export const siteTitle = "oak dashboard";

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <div className={styles.container}>
      <Menu secondary>
        <div style={{ paddingLeft: "1rem" }}>
          <Image
            as="a"
            href="https://myoaksystem.com"
            src="white_logo.png"
            alt="oak logo"
            size="mini"
          />
        </div>

        <Menu.Menu position="right">
          <Menu.Item active={pathname === "/"} as={Link} to="/" name="home" />
          <Menu.Item
            active={pathname === "/extension"}
            as={Link}
            to="/extension"
            name="extension"
          />
          <Menu.Item
            active={pathname === "/partners"}
            as={Link}
            to="/partners"
            name="partners"
          />
          <Menu.Item
            active={pathname === "/privacy"}
            as={Link}
            to="/privacy"
            name="privacy policy"
          />
        </Menu.Menu>
      </Menu>
    </div>
  );
}
