import React, { useState } from "react";
import PropTypes from "prop-types";
import { faChevronLeft, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CategoryInfos({ show, setShow }) {
  console.log("category info rendered");
  console.log(show);

  setTimeout(() => {
    console.log(show);
  }, 3000);

  const hideComponent = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <div className={`relative  ${show ? "" : "hidden"}`}>
      <div className="fixed bg-purple z-20 h-3/4 w-5/6 m-auto inset-x-0 top-12 py-4  px-2 bg-white rounded-sm">
        <button className="absolute right-2 top-2" onClick={hideComponent}>x</button>

        <div   class="grid grid-rows-1 grid-flow-col min-h-full">
          <div className="bg-pink col-span-3 w-60 min-h-full">
            <div className="m-auto bg-orange h-full  pt-5 text-center flex gap-4 flex-col basis-full	 flex- justify-center items-center justify-items-center">
              
              <button className=" bg-green w-9/12 px-2 py-2 rounded-md">همه ی آگهی ها</button>

              <button className="flex bg-blue px-2 py-2 w-9/12 flex-row items-center justify-between">
                <span>
                <FontAwesomeIcon icon={faHome} />

                </span>
                <span>املاک</span>
                <span>
                <FontAwesomeIcon icon={faChevronLeft} />
                </span>
              </button>

              <button className="flex bg-blue px-2 py-2 w-9/12 flex-row items-center justify-between">
                <span>
                <FontAwesomeIcon icon={faHome} />

                </span>
                <span>املاک</span>
                <span>
                <FontAwesomeIcon icon={faChevronLeft} />
                </span>
              </button>

              <button className="flex bg-blue px-2 py-2 w-9/12 flex-row items-center justify-between">
                <span>
                <FontAwesomeIcon icon={faHome} />

                </span>
                <span>املاک</span>
                <span>
                <FontAwesomeIcon icon={faChevronLeft} />
                </span>
              </button>

              <button className="flex bg-blue px-2 py-2 w-9/12 flex-row items-center justify-between">
                <span>
                <FontAwesomeIcon icon={faHome} />

                </span>
                <span>املاک</span>
                <span>
                <FontAwesomeIcon icon={faChevronLeft} />
                </span>
              </button>

              <button className="flex bg-blue px-2 py-2 w-9/12 flex-row items-center justify-between">
                <span>
                <FontAwesomeIcon icon={faHome} />

                </span>
                <span>املاک</span>
                <span>
                <FontAwesomeIcon icon={faChevronLeft} />
                </span>
              </button>

              <button className="flex bg-blue px-2 py-2 w-9/12 flex-row items-center justify-between">
                <span>
                <FontAwesomeIcon icon={faHome} />

                </span>
                <span>املاک</span>
                <span>
                <FontAwesomeIcon icon={faChevronLeft} />
                </span>
              </button>

              <button className="flex bg-blue px-2 py-2 w-9/12 flex-row items-center justify-between">
                <span>
                <FontAwesomeIcon icon={faHome} />

                </span>
                <span>املاک</span>
                <span>
                <FontAwesomeIcon icon={faChevronLeft} />
                </span>
              </button>
              
              <button className="flex bg-blue px-2 py-2 w-9/12 flex-row items-center justify-between">
                <span>
                <FontAwesomeIcon icon={faHome} />

                </span>
                <span>املاک</span>
                <span>
                <FontAwesomeIcon icon={faChevronLeft} />
                </span>
              </button>
              <button className="flex bg-blue px-2 py-2 w-9/12 flex-row items-center justify-between">
                <span>
                <FontAwesomeIcon icon={faHome} />

                </span>
                <span>املاک</span>
                <span>
                <FontAwesomeIcon icon={faChevronLeft} />
                </span>
              </button>
              <button className="flex bg-blue px-2 py-2 w-9/12 flex-row items-center justify-between">
                <span>
                <FontAwesomeIcon icon={faHome} />

                </span>
                <span>املاک</span>
                <span>
                <FontAwesomeIcon icon={faChevronLeft} />
                </span>
              </button>
            </div>

          </div>
          <div className="bg-orange col-span-10  overflow-x-scroll overflow-y-clip">
            <div class="grid grid-rows-1 grid-flow-col bg-gray-dark  min-h-full ">
              <div className="bg-green col-span-3 w-60 min-h-full">
                loemr0230
                loemr0230
                loemr0230
                loemr0230
              </div>
              <div className="bg-yellow col-span-3  w-60  min-h-full">01</div>
              <div className="bg-green col-span-3  w-60 min-h-full">01</div>
              <div className="bg-blue col-span-3  w-60 min-h-full">01</div>
              <div className="bg-green col-span-3  w-60 min-h-full">01</div>
              <div className="bg-yellow col-span-3  w-60 min-h-full">01</div>
              <div className="bg-green col-span-3  w-60 min-h-full">01</div>
              <div className="bg-blue col-span-3  w-60 min-h-full">01</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CategoryInfos.propTypes = {};

export default CategoryInfos;
