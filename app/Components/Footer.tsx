import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='bg-slate-600 flex flex-col-reverse sm:flex-row mx-auto justify-between gap-6 px-8 py-4 text-slate-300'>
            <div className='flex flex-col gap-2'>
                <address>آدرس : تهران - بلوار جنت آباد جنوبی - مجاهد کبیر شمالی - لاله چهارم غربی - پلاک 3 - زنگ 4</address>
                <div className='flex gap-1'>
                    <p>تلفن :</p>
                    <p> 021-44358912-4 </p>
                </div>
                <div className='flex gap-1'>
                    <p>فکس : </p>
                    <p>1276192051</p>
                </div>
                <div className='flex gap-1'>
                    <p>ایمیل : </p>
                    <a href='mailto:mahdietemad12@gmail.com'>mahdietemad9@gmail.com</a>
                </div>
                <p className='flex items-center gap-1'><span className='text-2xl'>&copy;</span> تمام حقوق سایت متعلق به شرکت کارتخوان سایان کارت می باشد.</p>
            </div>
            <div className='text-center flex flex-col gap-2 '>
                <p>لینک های ضروری</p>
                <div className='flex flex-col gap-1 font-semibold'>
                    <Link className='hover:text-slate-200 transition duration-200' href='/'>صفحه اصلی</Link>
                    <Link className='hover:text-slate-200 transition duration-200' href='/'>ثبت تیکت</Link>
                    <Link className='hover:text-slate-200 transition duration-200' href='/'>فروشگاه</Link>
                </div>
            </div>
            <div></div>
        </footer>
    )
}

export default Footer
