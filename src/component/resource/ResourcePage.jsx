import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Card from './Card'

function ResourcePage() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className='w-[90%] mx-auto font-Montserrat my-[100px]'>
          <div>
              <h2 className='text-rich-black-700  font-bold text-[2.375rem]'>Resource LIbrary</h2>
              <p className='text-rich-black-300  text-[1.375rem] '>Download helpful guides, worksheets, and reference materials</p>
          </div>
          
          <div>
              <button className='px-5 py-3 rounded-3xl bg-rich-black-700 text-rich-black-50  text-[0.9rem] text-center my-16'><FontAwesomeIcon icon="fa-solid fa-arrow-up-from-bracket" /> Upload New Resource</button>
          </div>

          <div className='flex justify-between items-center'>
              <div className='flex gap-4'>
                  <div className='border border-rich-black-100 p-2.5  rounded-3xl'>
                      <select defaultValue="Pick a Runtime" className="select select-success p-0.5">
                    <option disabled={true}>Pick a Runtime</option>
                    <option>npm</option>
                    <option>Bun</option>
                    <option>yarn</option>
                </select>
                </div>
                  <div className='border border-rich-black-100 p-2.5  rounded-3xl'>
                      <select defaultValue="Pick a Runtime" className="select select-success p-0.5">
                    <option disabled={true}>Pick a Runtime</option>
                    <option>npm</option>
                    <option>Bun</option>
                    <option>yarn</option>
                </select>
                </div>
                  


              </div>

              <div className=''>
                  <input type="text" placeholder="Search Resources" className="input input-neutral border border-rich-black-100 pl-3 pr-8 py-2 rounded-3xl" />
              </div>
          </div>

          <hr className='text-rich-black-100 my-16' />


          <div className='grid grid-cols-3 gap-10'>
              {
                  arr.map((item, index) => {
                      return <Card key={index}/>
                  })
              }
          </div>
      </div>
      
  )
}

export default ResourcePage
