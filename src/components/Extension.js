import React, { useState } from "react";
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Modal,
} from "semantic-ui-react";

import styles from "./Extension.module.css";

function MailChimpSignup({ signupOpen, setSignupOpen }) {
  return (
    <Modal
      onClose={() => setSignupOpen(false)}
      onOpen={() => setSignupOpen(true)}
      open={signupOpen}
      trigger={<button className={styles["button"]}>be notified</button>}
    >
      <Modal.Header>be notified when the extension is released!</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header as="h4" textAlign="center">
            by signing up below, you'll be one of the first to be notified about
            our new browser extension, releasing in the next few days! <br />
            (and don't worry, we won't spam your inbox)
          </Header>
          <div id="mc_embed_signup">
            <form
              action="https://myoaksystem.us1.list-manage.com/subscribe/post?u=0699eb05d8a193b27b646c8c0&amp;id=1aef75b28c"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              class="validate"
              target="_blank"
              novalidate
            >
              <div id="mc_embed_signup_scroll">
                <div class="indicates-required">
                  <span class="asterisk">*</span> indicates required
                </div>
                <div class="mc-field-group">
                  <label for="mce-EMAIL">
                    email address <span class="asterisk">*</span>
                  </label>
                  <input
                    type="email"
                    name="EMAIL"
                    class="required email"
                    id="mce-EMAIL"
                  />
                </div>
                <div class="mc-field-group">
                  <label for="mce-FNAME">first name </label>
                  <input type="text" name="FNAME" class="" id="mce-FNAME" />
                </div>
                <div class="mc-field-group">
                  <label for="mce-LNAME">last name </label>
                  <input type="text" name="LNAME" class="" id="mce-LNAME" />
                </div>
                <div id="mce-responses" class="clear">
                  <div
                    class="response"
                    id="mce-error-response"
                    style={{ display: "none" }}
                  ></div>
                  <div
                    class="response"
                    id="mce-success-response"
                    style={{ display: "none" }}
                  ></div>
                </div>
                <div
                  style={{ position: "absolute", left: "-5000px" }}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_0699eb05d8a193b27b646c8c0_1aef75b28c"
                    tabindex="-1"
                    value=""
                  />
                </div>
                <div class="clear">
                  <input
                    type="submit"
                    value="sign up"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className={styles["form-submit-button"]}
                  />
                </div>
              </div>
            </form>
          </div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setSignupOpen(false)}>
          no thanks
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default function Extension({ mobile }) {
  const [signupOpen, setSignupOpen] = useState(false);
  const rowClass = mobile ? styles["oak-row-mobile"] : styles["oak-row"];

  return (
    <>
      <div className={styles["marquee"]}>
        <Container>
          <Grid columns={2} stackable verticalAlign="middle">
            <Grid.Column>
              <h1 className={styles["oak-title"]}>
                a Google Chrome extension that checks if a product is
                Black-owned and compatible with your hair as you shop
              </h1>

              <MailChimpSignup
                signupOpen={signupOpen}
                setSignupOpen={setSignupOpen}
              />
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
              <MailChimpSignup
                signupOpen={signupOpen}
                setSignupOpen={setSignupOpen}
              />
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
