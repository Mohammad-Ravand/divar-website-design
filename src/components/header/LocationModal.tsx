import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {};

const LocationModal = (props: Props) => {
  return (
    <div className="flex items-center mx-2 h-12 ">
      <button className='rounded-md text-gray-dark  py-2 w-20 justify-center '>
        <span className='ml-1'><FontAwesomeIcon icon={faLocationDot} /></span>
        <span>23</span>
        <span>شهر</span>
      </button>

      

    </div>
  );
};

export default LocationModal;
