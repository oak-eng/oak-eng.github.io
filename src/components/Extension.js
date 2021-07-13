import React from "react";
import { Container, Grid, Header, Icon, Image } from "semantic-ui-react";

import styles from "./Extension.module.css";

export function ExtensionMarquee() {
  return (
    <div className={styles["marquee"]}>
      <Container>
        <Grid columns={2} stackable verticalAlign="middle">
          <Grid.Column>
            <h1 className={styles["oak-title"]}>
              a Google Chrome extension that checks if a product is Black-owned
              and compatible with your hair as you shop
            </h1>

            <a
              className={styles["button"]}
              href="https://chrome.google.com/webstore/detail/oak/ohenjpijmmigfbdbfnmdbonooeihehak"
              target="_blank"
              rel="noopener noreferrer"
            >
              download for free now
            </a>
          </Grid.Column>
          <Grid.Column>
            <Image
              centered
              rounded
              src="https://oak-images.s3.us-east-2.amazonaws.com/oak_extension_screenshot_1.png"
              size="large"
            />
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

export default function Extension({ mobile }) {
  const rowClass = mobile ? styles["oak-row-mobile"] : styles["oak-row"];

  return (
    <>
      <ExtensionMarquee />

      <div className={styles["marquee-2"]}>
        <Container>
          <Grid columns={2} stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column>
                <h1 className={styles["oak-title"]}>
                  every time you shop for hair products, you'll have access to
                  personalized, Black-owned recommendations
                </h1>
              </Grid.Column>
              <Grid.Column>
                <Image
                  centered
                  rounded
                  src="https://oak-images.s3.us-east-2.amazonaws.com/oak_extension_screenshot_4.png"
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <div style={{ paddingTop: "2rem", paddingBottom: "2rem" }}></div>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Grid columns={3}>
                  <Grid.Row>
                    <Grid.Column>
                      <Image centered rounded src="black_owned_logo.png" />
                    </Grid.Column>
                    <Grid.Column>
                      <Image centered rounded src="non_black_owned_logo.png" />
                    </Grid.Column>
                    <Grid.Column>
                      <Image centered rounded src="unknown_logo.png" />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <div className={styles["symbol-desc"]}>
                        this icon tells you that this product's business is
                        Black-owned
                      </div>
                    </Grid.Column>
                    <Grid.Column>
                      <div className={styles["symbol-desc"]}>
                        this icon tells you that this product's business is not
                        Black-owned
                      </div>
                    </Grid.Column>
                    <Grid.Column>
                      <div className={styles["symbol-desc"]}>
                        this icon tells you that we're not sure about the
                        ownership of this product's business, but we're working
                        to find out!
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
              <Grid.Column>
                <h1 className={styles["oak-title"]}>
                  while browsing Amazon, Target, or Walmart, you'll always know
                  which products are Black-owned
                </h1>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>

      <div className={styles["marquee-3"]}>
        <Container>
          <Grid columns={2} stackable verticalAlign="middle">
            <Grid.Column>
              <h1 className={styles["oak-title"]}>
                are you ready to change the way you shop?
              </h1>
            </Grid.Column>
            <Grid.Column>
              <a
                className={styles["button"]}
                href="https://chrome.google.com/webstore/detail/oak/ohenjpijmmigfbdbfnmdbonooeihehak"
                target="_blank"
                rel="noopener noreferrer"
              >
                download today
              </a>
            </Grid.Column>
          </Grid>
        </Container>
      </div>

      <div>
        <div className={`${rowClass} ${styles["contact"]}`}>
          <Header as="h1" textAlign="center">
            contact us
          </Header>

          <Header as="h1" textAlign="center">
            <a
              className={styles["black-link"]}
              href="mailto:info@myoaksystem.com"
            >
              info@myoaksystem.com
            </a>
          </Header>

          <br />

          <a
            className={styles["black-link"]}
            href="https://instagram.com/myoaksystem"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="instagram" size="big" circular link />
          </a>
          <a
            className={styles["black-link"]}
            href="https://www.linkedin.com/company/my-oak-systems/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="linkedin" size="big" circular link />
          </a>
        </div>
      </div>
    </>
  );
}
