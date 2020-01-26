import React from 'react'
import styled from 'styled-components'
import Tag from './atoms/Tag'

const TagList: React.FC<{ tags: (string | null | undefined)[] }> = ({
  tags,
}) => (
  <Component>
    {tags.map((tag, i) => (
      <>{tag && <Tag key={i} tag={tag} />}</>
    ))}
  </Component>
)

const Component = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default TagList
