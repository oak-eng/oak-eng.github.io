import React, { useEffect } from 'react';
import { Card, Container, Grid, Header, Icon, Image } from 'semantic-ui-react';

import styles from './Home.module.css';

export default function Home({ mobile }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  const aboutClass = mobile ? styles['marquee-mobile'] : styles['marquee']
  return (
    <>
      <div class={aboutClass}>
        <Container text>
          <h1 class={styles['oak-title']}>oak</h1>

          <h2 class={styles['oak-subtitle']}>
            never quite fit into the hair type system?
          </h2>
          <h2 class={styles['oak-subtitle']}>neither have we.</h2>

          <h3>
            an in-depth hair profile that will reveal your key haircare factors along with personalized product selections to unlock your healthiest hair.
          </h3>

          <div class={styles['marquee-button']}>
            <a href="http://consult.myoaksystem.com/" target="_blank" rel="noopener noreferrer">
              <button class={styles['button']}>
                FIND YOUR SYSTEM
              </button>
            </a>
          </div>
        </Container>
      </div>

      <div>
        <div class={styles['oak-row']}>
          <Grid
            columns='equal'
            padded
            stackable
            verticalAlign='middle'
          >
            <Grid.Row>
              <Grid.Column>
                <h1 class={styles['oak-subtitle']}>
                  haircare for everyone.
                </h1>

                <p class={styles['oak-text']}>
                  after taking oak's consultation, you'll receive a science-backed hair profile along with personalized product recommendations based off of key information about your hair, lifestyle, and environment.
                </p>

                <p class={styles['oak-text']}>
                  oak exists to provide a foundation that makes healthy hair easily accessible for everyone. ready to effortlessly take your hair to the next level? try oak.
                </p>
              </Grid.Column>
              <Grid.Column>
                <Image src="oak_hairtop.png" alt="3 photos of Black people's hair." />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>

        <div class={`${styles['oak-row']} ${styles['testimonial']}`}>
          <Grid
            columns='equal'
            centered
            padded
            stackable
            verticalAlign='middle'
          >
            <Grid.Row>
              <Grid.Column>
                <h1>"oak is fantastic. they really go into depth figuring out your individual needs for your hair." - Derek O.</h1>
              </Grid.Column>
              <Grid.Column textAlign='center'>
              <a href="http://consult.myoaksystem.com/" target="_blank" rel="noopener noreferrer">
                <button class={styles['button']}>
                  get yours today
                </button>
              </a>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>

        <div class={styles['oak-row']}>
          <Grid
            columns='equal'
            padded
            stackable
          >
            <Grid.Row>
              <Grid.Column>
                <Image src="oak_team.jpg" class="img-fluid" alt="the leaders of oak." />
              </Grid.Column>
              <Grid.Column>
                <div class={styles['about-us']}>
                  <h2 class={styles['oak-subtitle']}>about us</h2>

                  <p class={styles['oak-text']}>
                    oak was founded by 3 black Harvard women to begin to tackle the problems that exist in the natural hair market. oak is committed to uplifting black-owned brands, using science and technology to drive real results, and making natural hair accessible to all.
                  </p>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>

        <div class={`${styles['oak-row']} ${styles['transform']}`}>
          <h1 class={styles['oak-subtitle']}>
            want to help us transform natural haircare?
          </h1>

          <div style={{
            margin: '0 auto',
            paddingBottom: '2rem',
            width: '50%'
          }}>
            <h2 class={`${styles['oak-text']}`}>
              by simply completing our consultation and a short feedback survey, you can help us improve our technology!
            </h2>
          </div>

          <a href="http://consult.myoaksystem.com/" target="_blank" rel="noopener noreferrer">
            <button class={styles['button']}>
              begin now
            </button>
          </a>
        </div>

        <div class={`${styles['oak-row']}`}>
          <Header as='h1' textAlign='center'>
            follow our blog
          </Header>

          <Header as='h2' textAlign='center'>
            we're documenting our journey as student entrepreneurs
          </Header>

          <div style={{ paddingTop: '3rem' }}>
            <Card.Group doubling itemsPerRow={3}>
              <Card>
                <Image src='medium3.png' wrapped ui={false} />
                <Card.Content>
                  <Card.Header>
                    Black-owned businesses amid the coronavirus pandemic
                  </Card.Header>
                  <Card.Description>
                    Today we focus on another facet of oak — Black-owned businesses — as we take a look at how the pandemic has affected their operations.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a href="https://medium.com/@oaksystems/black-owned-businesses-amid-the-coronavirus-pandemic-fb62359f65e4" target="_blank" rel="noopener noreferrer">
                    <button class={styles['read-more']}>
                      read more
                    </button>
                  </a>
                </Card.Content>
              </Card>

              <Card>
                <Image src='medium2.png' wrapped ui={false} />
                <Card.Content>
                  <Card.Header>
                    Black hair amidst a pandemic
                  </Card.Header>
                  <Card.Description>
                    COVID-19 has changed every aspect of life as we know it. As students, we’ve dealt with the sudden eviction from campus, the loss of on-campus jobs, the challenges of switching to online classes, and transition back home.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a href="https://medium.com/@myoaksystem/black-hair-amidst-a-pandemic-b1c3e1e63fa7?sk=356e71a4b84256ac16388affd28b976d" target="_blank" rel="noopener noreferrer">
                    <button class={styles['read-more']}>
                      read more
                    </button>
                  </a>
                </Card.Content>
              </Card>

              <Card>
                <Image src='medium1.png' wrapped ui={false} />
                <Card.Content>
                  <Card.Header>
                    it started as a class project
                  </Card.Header>
                  <Card.Description>
                    It’s 7 pm, Sunday night, and I’m listening to one of my co-founders present her weekly deliverables to the team. We’re talking about our beta-launch, strategizing to build a tool that matches and exceeds our customer’s expectations.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a href="https://medium.com/@oaksystems/it-started-as-a-class-project-f241ffe0a614" target="_blank" rel="noopener noreferrer">
                    <button class={styles['read-more']}>
                      read more
                    </button>
                  </a>
                </Card.Content>
              </Card>
            </Card.Group>
          </div>
        </div>

        <div class={`${styles['oak-row']} ${styles['contact']}`}>
          <Header as='h1' textAlign='center'>
            contact us
          </Header>

          <Header as='h1' textAlign='center'>
            <a class={styles['black-link']} href="mailto:info@myoaksystem.com">info@myoaksystem.com</a>
          </Header>

          <br />

          <a class={styles['black-link']} href="https://instagram.com/myoaksystem" target="_blank" rel="noopener noreferrer"><Icon name='instagram' size='big' circular link /></a>
          <a class={styles['black-link']} href="https://www.linkedin.com/company/my-oak-systems/" target="_blank" rel="noopener noreferrer"><Icon name='linkedin' size='big' circular link /></a>
        </div>
      </div>
    </>
  )
}
