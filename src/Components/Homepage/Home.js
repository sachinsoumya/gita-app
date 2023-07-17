import React from 'react'
import Main from "./Main"
import Chapters from './Chapters'
import Dropdown from '../Dropdown'

export default function Home() {
  return (
    <div className='mt-5'>
        <Main />
        <Dropdown />
        <Chapters />

    </div>
    
  )
}
