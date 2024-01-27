import React, {useEffect, useState} from 'react'
import ProgressBar from './ProgressBar'
import AddSkils from './AddSkils'
import { client } from '../client'

const Technologies = () => {
  const [tech, setTech] = useState()
  useEffect(() => {
    const query = '*[_type == "tech"]'

    client.fetch(query).then(data => {
       setTech(data)
    })
  })
  return (
    <div className='mt-20' id='tech'>
         <h2 className='text-2xl text-secondary-color md:text-4xl font-semibold pl-10 mb-14'>Technologies</h2>
         <ProgressBar  tech={tech} />
         <AddSkils />
    </div>
  )
}

export default Technologies