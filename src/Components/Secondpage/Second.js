import React from 'react'
import Chapterdetail from './Chapterdetail'
import Verses from './Verses'
import { useParams } from 'react-router-dom'



export default function Second() {
  const { chapter } = useParams();
  // console.log(chapter);

  return (
    <div className='mt-5'>
      <Chapterdetail chapter={chapter} />
      <Verses chapter={chapter} />



    </div>
  )
}
