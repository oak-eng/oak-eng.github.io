import React from 'react'
import { Card, Image } from 'semantic-ui-react';

import styles from './MediumCard.module.css';

export default function MediumCard({ description, imageLink, link, title}) {
  return (
    <Card>
      <Image src={imageLink} wrapped ui={false} />
      <Card.Content>
        <Card.Header>
          {title}
        </Card.Header>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button class={styles['read-more']}>
            read more
          </button>
        </a>
      </Card.Content>
    </Card>
  )
}
