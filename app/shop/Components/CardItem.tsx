import React from 'react'
import Image from 'next/image'
interface Props {
    item: {
        id: number
        name: string
        price: number
        image: string
    }
}

const CardItem = ({ item: { image, name, price } }: Props) => {
    return (
        <article
            className='bg-neutral-400/60 w-[300px] h-[340px] rounded-md overflow-hidden'
        >
            <Image className='bg-white w-full h-[274px] overflow-hidden
             object-cover duration-200 hover:saturate-[110%]' src={image} alt={name} width={400} height={400} />
            <div className='flex justify-between px-4 items-center'>
                <p className='font-semibold text-lg'>{name}</p>
                <div className='flex gap-1.5 py-4'>
                    <button className='bg-green-500 flex justify-center items-center w-6 h-6 text-xl rounded-full'>+</button>
                    <p className='font-semibold'>{price}</p>
                    <button className='bg-red-500 flex justify-center items-center text-xl w-6 h-6 rounded-full'> -</button>
                </div>
            </div>
        </article>
    )
}

export default CardItem
