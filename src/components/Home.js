import React, { useEffect } from "react";
import { Card, Container, Grid, Header, Icon, Image } from "semantic-ui-react";

import MediumCard from "./MediumCard.js";

import styles from "./Home.module.css";

const mediumArticles = [
  {
    key: 3,
    title: "Black-owned businesses amid the coronavirus pandemic",
    description:
      "Today we focus on another facet of oak — Black-owned businesses — as we take a look at how the pandemic has affected their operations.",
    imageLink: "medium3.png",
    link:
      "https://medium.com/@oaksystems/black-owned-businesses-amid-the-coronavirus-pandemic-fb62359f65e4",
  },
  {
    key: 2,
    title: "Black hair amidst a pandemic",
    description:
      "COVID-19 has changed every aspect of life as we know it. As students, we’ve dealt with the sudden eviction from campus, the loss of on-campus jobs, the challenges of switching to online classes, and transition back home.",
    imageLink: "medium2.png",
    link:
      "https://medium.com/@myoaksystem/black-hair-amidst-a-pandemic-b1c3e1e63fa7?sk=356e71a4b84256ac16388affd28b976d",
  },
  {
    key: 1,
    title: "it started as a class project",
    description:
      "It’s 7 pm, Sunday night, and I’m listening to one of my co-founders present her weekly deliverables to the team. We’re talking about our beta-launch, strategizing to build a tool that matches and exceeds our customer’s expectations.",
    imageLink: "medium1.png",
    link:
      "https://medium.com/@oaksystems/it-started-as-a-class-project-f241ffe0a614",
  },
];

export default function Home({ mobile }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const rowClass = mobile ? styles["oak-row-mobile"] : styles["oak-row"];
  const cardContainerClass = mobile
    ? styles["medium-card-container-mobile"]
    : styles["medium-card-container"];

  const mediumCards = () => {
    if (mobile) {
      return <MediumCard {...mediumArticles[0]} />;
    }
    return mediumArticles.map((article) => <MediumCard {...article} />);
  };
  return (
    <>
      <div className={styles["marquee"]}>
        <Container text>
          <h1 className={styles["oak-title"]}>oak</h1>

          <h2 className={styles["oak-subtitle"]}>
            never quite fit into the hair type system?
          </h2>
          <h2 className={styles["oak-subtitle"]}>neither have we.</h2>

          <h3>
            an in-depth hair profile that will reveal your key haircare factors
            along with personalized product selections to unlock your healthiest
            hair.
          </h3>

          <div className={styles["marquee-button"]}>
            <a
              href="http://consult.myoaksystem.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles["button"]}>FIND YOUR SYSTEM</button>
            </a>
          </div>
        </Container>
      </div>

      <div>
        <div className={rowClass}>
          <Grid columns="equal" padded stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column>
                <h1 className={styles["oak-subtitle"]}>
                  haircare for everyone.
                </h1>

                <p className={styles["oak-text"]}>
                  after taking oak's consultation, you'll receive a
                  science-backed hair profile along with personalized product
                  recommendations based off of key information about your hair,
                  lifestyle, and environment.
                </p>

                <p className={styles["oak-text"]}>
                  oak exists to provide a foundation that makes healthy hair
                  easily accessible for everyone. ready to effortlessly take
                  your hair to the next level? try oak.
                </p>
              </Grid.Column>
              <Grid.Column>
                <Image
                  src="oak_hairtop.png"
                  alt="3 photos of Black people's hair."
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>

        <div className={`${rowClass} ${styles["testimonial"]}`}>
          <Grid
            columns="equal"
            centered
            padded
            stackable
            verticalAlign="middle"
          >
            <Grid.Row>
              <Grid.Column>
                <h1>
                  "oak is fantastic. they really go into depth figuring out your
                  individual needs for your hair." - Derek O.
                </h1>
              </Grid.Column>
              <Grid.Column textAlign="center">
                <a
                  href="http://consult.myoaksystem.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className={styles["button"]}>get yours today</button>
                </a>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>

        <div className={rowClass}>
          <Grid columns="equal" padded stackable>
            <Grid.Row>
              <Grid.Column>
                <Image
                  src="oak_team.jpg"
                  className="img-fluid"
                  alt="the leaders of oak."
                />
              </Grid.Column>
              <Grid.Column>
                <div className={styles["about-us"]}>
                  <h2 className={styles["oak-subtitle"]}>about us</h2>

                  <p className={styles["oak-text"]}>
                    oak was founded by 3 black Harvard women to begin to tackle
                    the problems that exist in the natural hair market. oak is
                    committed to uplifting black-owned brands, using science and
                    technology to drive real results, and making natural hair
                    accessible to all.
                  </p>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>

        <div className={`${rowClass} ${styles["transform"]}`}>
          <h1 className={styles["oak-subtitle"]}>
            want to help us transform natural haircare?
          </h1>

          <div
            style={{
              margin: "0 auto",
              paddingBottom: "2rem",
              width: "75%",
            }}
          >
            <h2 className={`${styles["oak-text"]}`}>
              by simply completing our consultation and a short feedback survey,
              you can help us improve our technology!
            </h2>
          </div>

          <a
            href="http://consult.myoaksystem.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={styles["button"]}>begin now</button>
          </a>
        </div>

        <div className={rowClass}>
          <Header as="h1" textAlign="center">
            follow our blog
          </Header>

          <Header as="h2" textAlign="center">
            <a
              className={styles["black-link"]}
              href="https://medium.com/@oaksystems"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="medium m" size="large" circular link />
            </a>
          </Header>

          <Header as="h2" textAlign="center">
            we're documenting our journey as student entrepreneurs
          </Header>

          <Header as="h3" textAlign="center">
            our latest:
          </Header>

          <div className={cardContainerClass}>
            <Card.Group doubling centered itemsPerRow={mobile ? 1 : 3}>
              {mediumCards()}
            </Card.Group>
          </div>
        </div>

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
