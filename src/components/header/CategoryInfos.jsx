import React, { useReducer, useState } from "react";
import PropTypes from "prop-types";
import { faChevronLeft, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CategoryNav from './CategoryNav';
import CategoryListItems from "./CategoryListItems";


const categoryItemReducer = (state, action) =>{
  return state;
};


function CategoryInfos({ show, setShow }) {
  const [categoryListItems,setCategoryListItems] = useState(null);
  const [categoryItems,dispatch] = useReducer(categoryItemReducer,[
    {
      name:'املاک',
      icon:faHome,
      active:false,
      categories:[
        {
          name:'فروش مسکونی',
          link:'',
          items:[
            {name:'آپارتمان',link:''},
            {name:'خانه و  ویلا',link:''},
            {name:'خانه و  ویلا',link:''},
            {name:'خانه و  ویلا',link:''},
            {name:'خانه و  ویلا',link:''},
            {name:'خانه و  ویلا',link:''},
            {name:'خانه و  ویلا',link:''},
            {name:'خانه و  ویلا',link:''},
            {name:'خانه و  ویلا',link:''},
            {name:'خانه و  ویلا',link:''},
            {name:'خانه و  ویلا',link:''},
            {name:'خانه و  ویلا',link:''},
            {name:'خانه و  ویلا',link:''},
            {name:'زمین و کلنگی',link:''}
          ]
        },
        {
          name:'اجاره مسکونی',
          link:'',
          items:[
            {name:'',link:''}
          ]
        },
        {
          name:'فروش اداری و تجاری',
          link:'',
          items:[
            {name:'آپارتمان',link:''},
            {name:'خانه و ویلا',link:''},
          ]
        },
        {
          name:'اجاره اداری و تجاری',
          link:'',
          items:[
            {name:'دفتر کار، اتاق اداری و مطب',link:''},
            {name:'مغازه و غرفه',link:''},
            {name:'صنعتی،‌ کشاورزی و تجاری',link:''},
          ]
        },
        {
          name:'اجاره کوتاه مدت',
          link:'',
          items:[
            {name:'تست',link:''}
          ]
        }
        ,
        {
          name:'پروژه های ساخت و ساز',
          link:'',
          items:[
            {name:'تست',link:''}
          ]
        }
      ] 
    },
    {
      name:'وسایل نقلیه',
      icon:faHome,
      active:false,
      categories:[
        {
          name:'فروش مسکونی',
          link:'',
          items:[
            {name:'آپارتمان',link:''},
            {name:'خانه و  ویلا',link:''},
            {name:'زمین و کلنگی',link:''}
          ]
        },
        {
          name:'اجاره مسکونی',
          link:'',
          items:[
            {name:'',link:''}
          ]
        },
        {
          name:'فروش اداری و تجاری',
          link:'',
          items:[
            {name:'آپارتمان',link:''},
            {name:'خانه و ویلا',link:''},
          ]
        },
        {
          name:'اجاره اداری و تجاری',
          link:'',
          items:[
            {name:'دفتر کار، اتاق اداری و مطب',link:''},
            {name:'مغازه و غرفه',link:''},
            {name:'صنعتی،‌ کشاورزی و تجاری',link:''},
          ]
        },
        {
          name:'اجاره کوتاه مدت',
          link:'',
          items:[
            {name:'تست',link:''}
          ]
        }
        ,
        {
          name:'پروژه های ساخت و ساز',
          link:'',
          items:[
            {name:'تست',link:''}
          ]
        }
      ] 
    },
    {
      name:'تجهیزات و صنعتی',
      icon:faHome,
      active:false,
      categories:[
        {
          name:'فروش مسکونی',
          link:'',
          items:[
            {name:'آپارتمان',link:''},
            {name:'خانه و  ویلا',link:''},
            {name:'زمین و کلنگی',link:''}
          ]
        },
        {
          name:'اجاره مسکونی',
          link:'',
          items:[
            {name:'',link:''}
          ]
        },
        {
          name:'فروش اداری و تجاری',
          link:'',
          items:[
            {name:'آپارتمان',link:''},
            {name:'خانه و ویلا',link:''},
          ]
        },
        {
          name:'اجاره اداری و تجاری',
          link:'',
          items:[
            {name:'دفتر کار، اتاق اداری و مطب',link:''},
            {name:'مغازه و غرفه',link:''},
            {name:'صنعتی،‌ کشاورزی و تجاری',link:''},
          ]
        },
        {
          name:'اجاره کوتاه مدت',
          link:'',
          items:[
            {name:'تست',link:''}
          ]
        }
        ,
        {
          name:'پروژه های ساخت و ساز',
          link:'',
          items:[
            {name:'تست',link:''}
          ]
        }
      ] 
    },
    {
      name:'استخدام کارایی',
      icon:faHome,
      active:false,
      categories:[
        {
          name:'فروش مسکونی',
          link:'',
          items:[
            {name:'آپارتمان',link:''},
            {name:'خانه و  ویلا',link:''},
            {name:'زمین و کلنگی',link:''}
          ]
        },
        {
          name:'اجاره مسکونی',
          link:'',
          items:[
            {name:'',link:''}
          ]
        },
        {
          name:'فروش اداری و تجاری',
          link:'',
          items:[
            {name:'آپارتمان',link:''},
            {name:'خانه و ویلا',link:''},
          ]
        },
        {
          name:'اجاره اداری و تجاری',
          link:'',
          items:[
            {name:'دفتر کار، اتاق اداری و مطب',link:''},
            {name:'مغازه و غرفه',link:''},
            {name:'صنعتی،‌ کشاورزی و تجاری',link:''},
          ]
        },
        {
          name:'اجاره کوتاه مدت',
          link:'',
          items:[
            {name:'تست',link:''}
          ]
        }
        ,
        {
          name:'پروژه های ساخت و ساز',
          link:'',
          items:[
            {name:'تست',link:''}
          ]
        }
      ] 
    },
    {
      name:'اجتماعی',
      icon:faHome,
      active:false,
      categories:[
        {
          name:'فروش مسکونی',
          link:'',
          items:[
            {name:'آپارتمان',link:''},
            {name:'خانه و  ویلا',link:''},
            {name:'زمین و کلنگی',link:''}
          ]
        },
        {
          name:'اجاره مسکونی',
          link:'',
          items:[
            {name:'',link:''}
          ]
        },
        {
          name:'فروش اداری و تجاری',
          link:'',
          items:[
            {name:'آپارتمان',link:''},
            {name:'خانه و ویلا',link:''},
          ]
        },
        {
          name:'اجاره اداری و تجاری',
          link:'',
          items:[
            {name:'دفتر کار، اتاق اداری و مطب',link:''},
            {name:'مغازه و غرفه',link:''},
            {name:'صنعتی،‌ کشاورزی و تجاری',link:''},
          ]
        },
        {
          name:'اجاره کوتاه مدت',
          link:'',
          items:[
            {name:'تست',link:''}
          ]
        }
        ,
        {
          name:'پروژه های ساخت و ساز',
          link:'',
          items:[
            {name:'تست',link:''}
          ]
        }
      ] 
    },
    {
      name:'سرگرمی و فراغت',
      icon:faHome,
      active:false,
      categories:[
        {
          name:'فروش مسکونی',
          link:'',
          items:[
            {name:'آپارتمان',link:''},
            {name:'خانه و  ویلا',link:''},
            {name:'زمین و کلنگی',link:''}
          ]
        },
        {
          name:'اجاره مسکونی',
          link:'',
          items:[
            {name:'',link:''}
          ]
        },
        {
          name:'فروش اداری و تجاری',
          link:'',
          items:[
            {name:'آپارتمان',link:''},
            {name:'خانه و ویلا',link:''},
          ]
        },
        {
          name:'اجاره اداری و تجاری',
          link:'',
          items:[
            {name:'دفتر کار، اتاق اداری و مطب',link:''},
            {name:'مغازه و غرفه',link:''},
            {name:'صنعتی،‌ کشاورزی و تجاری',link:''},
          ]
        },
        {
          name:'اجاره کوتاه مدت',
          link:'',
          items:[
            {name:'تست',link:''}
          ]
        }
        ,
        {
          name:'پروژه های ساخت و ساز',
          link:'',
          items:[
            {name:'تست',link:''}
          ]
        }
      ] 
    },
    {
      name:'وسایل شخصی',
      icon:faHome,
      active:false,
      categories:[
        {
          name:'فروش مسکونی',
          link:'',
          items:[
            {name:'آپارتمان',link:''},
            {name:'خانه و  ویلا',link:''},
            {name:'زمین و کلنگی',link:''}
          ]
        },
        {
          name:'اجاره مسکونی',
          link:'',
          items:[
            {name:'',link:''}
          ]
        },
        {
          name:'فروش اداری و تجاری',
          link:'',
          items:[
            {name:'آپارتمان',link:''},
            {name:'خانه و ویلا',link:''},
          ]
        },
        {
          name:'اجاره اداری و تجاری',
          link:'',
          items:[
            {name:'دفتر کار، اتاق اداری و مطب',link:''},
            {name:'مغازه و غرفه',link:''},
            {name:'صنعتی،‌ کشاورزی و تجاری',link:''},
          ]
        },
        {
          name:'اجاره کوتاه مدت',
          link:'',
          items:[
            {name:'تست',link:''}
          ]
        }
        ,
        {
          name:'پروژه های ساخت و ساز',
          link:'',
          items:[
            {name:'تست',link:''}
          ]
        }
      ] 
    },
    {
      name:'خدمات',
      icon:faHome,
      active:false,
      categories:[
        {
          name:'فروش مسکونی',
          link:'',
          items:[
            {name:'آپارتمان',link:''},
            {name:'خانه و  ویلا',link:''},
            {name:'زمین و کلنگی',link:''}
          ]
        },
        {
          name:'اجاره مسکونی',
          link:'',
          items:[
            {name:'',link:''}
          ]
        },
        {
          name:'فروش اداری و تجاری',
          link:'',
          items:[
            {name:'آپارتمان',link:''},
            {name:'خانه و ویلا',link:''},
          ]
        },
        {
          name:'اجاره اداری و تجاری',
          link:'',
          items:[
            {name:'دفتر کار، اتاق اداری و مطب',link:''},
            {name:'مغازه و غرفه',link:''},
            {name:'صنعتی،‌ کشاورزی و تجاری',link:''},
          ]
        },
        {
          name:'اجاره کوتاه مدت',
          link:'',
          items:[
            {name:'تست',link:''}
          ]
        }
        ,
        {
          name:'پروژه های ساخت و ساز',
          link:'',
          items:[
            {name:'تست',link:''}
          ]
        }
      ] 
    },
    {
      name:'خانه و آشپزخانه',
      icon:faHome,
      active:false,
      categories:[
        {
          name:'فروش مسکونی',
          link:'',
          items:[
            {name:'آپارتمان',link:''},
            {name:'خانه و  ویلا',link:''},
            {name:'زمین و کلنگی',link:''}
          ]
        },
        {
          name:'اجاره مسکونی',
          link:'',
          items:[
            {name:'',link:''}
          ]
        },
        {
          name:'فروش اداری و تجاری',
          link:'',
          items:[
            {name:'آپارتمان',link:''},
            {name:'خانه و ویلا',link:''},
          ]
        },
        {
          name:'اجاره اداری و تجاری',
          link:'',
          items:[
            {name:'دفتر کار، اتاق اداری و مطب',link:''},
            {name:'مغازه و غرفه',link:''},
            {name:'صنعتی،‌ کشاورزی و تجاری',link:''},
          ]
        },
        {
          name:'اجاره کوتاه مدت',
          link:'',
          items:[
            {name:'تست',link:''}
          ]
        }
        ,
        {
          name:'پروژه های ساخت و ساز',
          link:'',
          items:[
            {name:'تست',link:''}
          ]
        }
      ] 
    },
    {
      name:'کالای دیجیتال',
      icon:faHome,
      active:false,
      categories:[
        {
          name:'فروش مسکونی',
          link:'',
          items:[
            {name:'آپارتمان',link:''},
            {name:'خانه و  ویلا',link:''},
            {name:'زمین و کلنگی',link:''}
          ]
        },
        {
          name:'اجاره مسکونی',
          link:'',
          items:[
            {name:'',link:''}
          ]
        },
        {
          name:'فروش اداری و تجاری',
          link:'',
          items:[
            {name:'آپارتمان',link:''},
            {name:'خانه و ویلا',link:''},
          ]
        },
        {
          name:'اجاره اداری و تجاری',
          link:'',
          items:[
            {name:'دفتر کار، اتاق اداری و مطب',link:''},
            {name:'مغازه و غرفه',link:''},
            {name:'صنعتی،‌ کشاورزی و تجاری',link:''},
          ]
        },
        {
          name:'اجاره کوتاه مدت',
          link:'',
          items:[
            {name:'تست',link:''}
          ]
        }
        ,
        {
          name:'پروژه های ساخت و ساز',
          link:'',
          items:[
            {name:'تست',link:''}
          ]
        }
      ] 
    },
  ]);
  console.log("category info rendered");
  console.log(show);


  const hideComponent = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  const setCategories = (e,categories) => {
    e.preventDefault();
    console.log('categories');
    console.log(categories);
    setCategoryListItems(categories);
  };


  const fakeNums =Array.apply(null, Array(50))
  return (
    <div className={`relative  ${show ? "" : "hidden"}`}>
      <div className="fixed bg-purple z-20 h-3/4 w-5/6 sm:w-5/6 m-auto inset-x-0 top-12 py-4  px-2 bg-white rounded-sm">
        <button className="absolute right-2 top-2" onClick={hideComponent}>x</button>

        <div className="grid grid-rows-1 grid-flow-col min-h-full">
          <div className="bg-pink col-span-3 min-h-full">
            <div className="m-auto bg-orange h-full  pt-5 text-center flex gap-4 flex-col basis-full	 flex- justify-center items-center justify-items-center">
              
              <button className=" bg-green w-9/12 px-2 py-2 rounded-md">همه ی آگهی ها</button>


              {
                categoryItems.map((item, index) =>{
                  return <CategoryNav key={item.name} text={item.name} onMouseEnter={(e)=>setCategories(e,item.categories)} icon={item.icon}/>
                })
              }




            </div>

          </div>
          <div className="bg-blue col-span-10  overflow-x-scroll flex-col flex flex-wrap gap-x-4 pr-1 py-5 pl-96 gap-y-1" style={{maxHeight:'750px'}}>
                {
                  categoryListItems && <CategoryListItems categoryListItems={categoryListItems} />
                }
              
          </div>
        </div>
      </div>
    </div>
  );
}

CategoryInfos.propTypes = {};

export default CategoryInfos;
