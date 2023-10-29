import React from 'react'
import CardItem from './CardItem'
interface Props {
    data: {
        id: number,
        image: string,
        name: string,
        price: number
    }[]
}

const Card = ({ data }: Props) => {
    return (
        <section className='py-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3
         2xl:grid-cols-4 place-items-center gap-14 mx-12'>
            {
                data.map(item => <CardItem item={item} key={item.id} />)
            }
        </section>
    )
}

export default Card
