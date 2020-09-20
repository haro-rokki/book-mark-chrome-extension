import React from 'react'

import { Paragraph } from './paragraph'

type Props = {
  content: string
}

export const Article: React.FC<Props> = ({ content }) => {
  return (
    <>
      {content.split('\\n').map((p, i) => (
        <Paragraph p={p} key={i} />
      ))}
    </>
  )
}
