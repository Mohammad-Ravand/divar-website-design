import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function CategoryItem({icon,text,onMouseEnter}) {
  return (
    <button onMouseEnter={onMouseEnter} className="flex bg-blue px-2 py-2 w-9/12 flex-row items-center justify-between">
      <span>
        <FontAwesomeIcon icon={icon} />
      </span>
      <span>{text}</span>
      <span>
        <FontAwesomeIcon icon={faChevronLeft} />
      </span>
    </button>
  );
}

CategoryItem.propTypes = {};

export default CategoryItem;
