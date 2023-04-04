import React from 'react'
import PropTypes from 'prop-types'
import CategoryListItem from './CategoryListItem'

function CategoryListItems({categoryListItems}) {
    console.log('categoryListItems')
    console.log(categoryListItems)
  return (
    categoryListItems.map((item,index)=>{
        return <CategoryListItem categoryListItem={item} />
    })
  )
}

CategoryListItems.propTypes = {}

export default CategoryListItems
