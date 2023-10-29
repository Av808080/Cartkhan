import React from 'react'
import Cards from './CardGrid'

const info = [{
    id:1,
    name:"کارتخوان1",
    price:3490,
    image:'/shop/P7.jpg'
},
{
    id:2,
    name:"کارتخوان1",
    price:3679,
    image:'/shop/P3.png'
},{
    id:3,
    name:"کارتخوان1",
    price:4299,
    image:'/shop/P8.png'
},{
    id:4,
    name:"کارتخوان1",
    price:3576,
    image:'/shop/Nexgo.jpg'
},{
    id:5,
    name:"کارتخوان1",
    price:3895,
    image:'/shop/P5.jpg'
},
]

const BestSeller = () => {
  return (
    <div>
      <h2 className='font-semibold text-2xl px-14 py-4 text-center md:text-right '>پرفروش های ماه </h2>
      <Cards data={info}/>
    </div>
  )
}

export default BestSeller
