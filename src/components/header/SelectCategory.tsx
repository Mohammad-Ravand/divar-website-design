import { faArrowDown, faArrowDownAZ, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import CategoryInfos from './CategoryInfos';

type Props = {}

function SelectCategory({}: Props) {
  
  const [showCategoryInfo,setShowCategoryInfo] = useState(false);
  
  const toggleShowCategoryInfo = (e:any)=>{
    e.preventDefault();
    setShowCategoryInfo(!showCategoryInfo)
  }

  return (
    <div className="flex items-center mx-2 h-12 ">
      <button onClick={toggleShowCategoryInfo}  className='rounded-md hover:bg-gray-light text-gray-dark  py-2 w-26  justify-center '>
        <span className='px-2 text-sm '>دسته بندی ها</span>
        <span className='pl-1 '><FontAwesomeIcon className='' icon={faArrowDown} /></span>
      </button>

      <CategoryInfos show={showCategoryInfo} setShow={setShowCategoryInfo}/>

    </div>
  )
}

export default SelectCategory