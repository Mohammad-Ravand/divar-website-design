import React from 'react'
import PropTypes from 'prop-types'

function CategoryListItem({categoryListItem}) {
  console.log('categoryListItem')
  console.log(categoryListItem)
  return (
    <div className="block px-5 w-56  h-fit py-2 my-1"> 
    <ul>
      <li className='font-bold p y-2 mb-2'>{categoryListItem.name}</li>
        {categoryListItem.items.map((item,index)=>{
           return <li className='py-1 text-sm'>{item.name}</li>
        })}
    </ul>   
    </div>
  )
}

CategoryListItem.propTypes = {}

export default CategoryListItem
