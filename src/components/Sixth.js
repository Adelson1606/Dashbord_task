import React from 'react'
import Post from './Post';
import ColumnGap from './ColumnGap'



export default function Fourth({ sixthData }) {

  return (
    <ColumnGap>
      {sixthData.map(e => <Post data={e} key={e.id} />)}
    </ColumnGap>

  )
}
