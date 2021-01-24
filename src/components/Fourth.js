import React from 'react'
import Post from './Post';
import ColumnGap from './ColumnGap';

export default function Fourth(props) {
  const data = props.fourthData


  return (
    <ColumnGap>
      {data.map(e => <Post data={e} key={e.id} />)}
    </ColumnGap>
  )
}
