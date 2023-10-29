import Link from "next/link"
import Slider from "./Components/Slider"
import BestSeller from "./shop/Components/BestSeller"

const Home = () => {
  return (
    <main>
      <Slider />
      <BestSeller/>
      <Link className="bg-orange-500 block w-fit mt-6 mb-8 mx-auto px-4 py-2 rounded-lg text-xl font-semibold tracking-wide animate-bounce
       shadow-orange-300 shadow-lg hover:bg-orange-600 hover:shadow-orange-400 duration-200  " href='/shop'>مشاهده تمام محصولات</Link>
    </main>
  )
}

export default Home