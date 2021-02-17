import React from "react";
import { Grid, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={`${styles["oak-row"]} ${styles["footer"]}`}>
      <Grid columns="equal" padded stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column textAlign="center">
            <h3>MENU</h3>
            <p>
              <Link className={styles["white-link"]} to="/">
                home page
              </Link>
            </p>
            <p>
              <Link className={styles["white-link"]} to="/privacy">
                privacy policy
              </Link>
            </p>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <Image centered src="white_logo.png" alt="oak logo" size="tiny" />
          </Grid.Column>
          <Grid.Column textAlign="center">
            <h3>FOLLOW US</h3>
            <p>
              <a
                className={styles["white-link"]}
                href="https://instagram.com/myoaksystem"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </p>
            <p>
              <a
                className={styles["white-link"]}
                href="https://www.linkedin.com/company/my-oak-systems/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
