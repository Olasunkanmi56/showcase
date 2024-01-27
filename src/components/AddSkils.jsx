import React, { useEffect, useState } from 'react'
import { client } from '../client'

const AddSkils = () => {
  const [data, addData] = useState()

  useEffect(() => {
      const query = `*[_type == 'addskills']`

      client.fetch(query).then(data => {
        console.log(data)
         addData(data)
      })
  })
  return (
    <div className='mt-14'>
    <h2 className='text-2xl text-secondary-color md:text-3xl font-semibold pl-10 mb-14'>Additional technologies and skills</h2>
    <div className="mx-auto w-full max-w-[700px]">
    <ul className='list-disc text-center md:text-left text-white grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        { 
          data?.map((d, i) => (
            
            <li key={i} className='font-semibold text-lg'>{d.title}</li>
          ))
        }
        {/* <li className='font-semibold text-lg'>Wordpress</li>
        <li className='font-semibold text-lg'>Teamwork</li>
        <li className='font-semibold text-lg'>Quick learning</li>
        <li className='font-semibold text-lg'>Engagement</li>
        <li className='font-semibold text-lg'>B2 English</li>
        <li className='font-semibold text-lg'>RWD</li> */}
    </ul>
</div>



</div>
  )
}

export default AddSkils