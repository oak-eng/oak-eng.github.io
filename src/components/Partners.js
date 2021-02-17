import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";

import styles from "./Partners.module.css";

export default function Partners({ mobile }) {
  const rowClass = mobile ? styles["oak-row-mobile"] : styles["oak-row"];

  return (
    <div class={rowClass}>
      <Header as="h1" textAlign="center">
        oak's Black-owned business partners
      </Header>

      <Header as="h3" textAlign="center">
        oak has partnered with 10 Black-owned businesses who provide excellent
        hair products to enrich the oak experience!
      </Header>

      <Header as="h3" textAlign="center">
        these partners provide us with information about their products that we
        then use to recommend great, personalized products to our users. they
        have incredibly inspiring stories and a commitment to excellence in
        their products and business practices. we're happy to be working with
        them, and we hope you check them out!
      </Header>

      <Header as="h3" textAlign="center">
        and if you own a Black-owned haircare business, contact us! we'd love to
        partner with you too. shoot us an email at{" "}
        <a className={styles["black-link"]} href="mailto:info@myoaksystem.com">
          info@myoaksystem.com
        </a>
      </Header>
      <div style={{ paddingBottom: "3rem" }}></div>

      <Grid columns="equal" relaxed stackable>
        <Grid.Row>
          <Grid.Column>
            <Image
              src="partner_1.png"
              class="img-fluid"
              alt="Sienna Naturals"
            />
          </Grid.Column>
          <Grid.Column>
            <Image src="partner_2.png" class="img-fluid" alt="Canviiy" />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Image src="partner_3.png" class="img-fluid" alt="Uhai" />
          </Grid.Column>
          <Grid.Column>
            <Image src="partner_4.png" class="img-fluid" alt="Bread" />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Image
              src="partner_5.png"
              class="img-fluid"
              alt="Nancy's Kitchen Products"
            />
          </Grid.Column>
          <Grid.Column>
            <Image src="partner_6.png" class="img-fluid" alt="Mixed Chicks" />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Image
              src="partner_7.png"
              class="img-fluid"
              alt="Treasured Locks"
            />
          </Grid.Column>
          <Grid.Column>
            <Image src="partner_8.png" class="img-fluid" alt="GIRL+HAIR" />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Image src="partner_9.png" class="img-fluid" alt="TGIN" />
          </Grid.Column>
          <Grid.Column>
            <Image
              src="partner_10.png"
              class="img-fluid"
              alt="Urban Hydration"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
