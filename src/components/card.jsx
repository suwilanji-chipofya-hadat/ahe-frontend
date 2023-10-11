'use client';

import { Card } from 'flowbite-react';

export default function ServiceCard(props) {
  return (
    <Card
      imgAlt={`${props.title}`}
      imgSrc={`${props.src}`}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
          {`${props.title}`}
        </p>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <p>
          {`${props.content}`}
        </p>
      </p>
    </Card>
  )
}


