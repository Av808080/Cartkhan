import React from 'react'

const Ticket = () => {
    return (
        <main className='min-h-screen py-4'>
            <h1 className='text-center font-bold text-3xl md:text-4xl my-2'>فرم ثبت تیکت</h1>
            <form className='flex flex-col gap-4 justify-center items-center my-4'>
                <div>
                    <label className='font-semibold mx-1' htmlFor="Name">نام : </label>
                    <input id='Name' className='bg-neutral-400 rounded-lg py-1 px-3' />
                </div>
                <div>
                    <label className='font-semibold mx-1' htmlFor="Phone">تلفن : </label>
                    <input type="number" id="Phone"
                        className='bg-neutral-400 rounded-lg py-1 px-3'
                    />
                </div>
                <div>
                    <label className='font-semibold mx-1'
                        htmlFor="Email">ایمیل : </label>
                    <input type='email' id='Email'
                        className='bg-neutral-400 rounded-lg py-1 px-3'
                    />
                </div>
                <div className='flex items-center'>
                    <label className='font-semibold mx-1' htmlFor="Problem">تیکت :  </label>
                    <textarea cols={23} className='resize-none
                     bg-neutral-400 rounded-lg py-1 px-3 mx-1
                     ' name="" id="Problem" ></textarea>
                </div>
                <button type='submit'
                    className='bg-indigo-700 text-indigo-50 py-1 px-4 text-xl rounded-xl hover:bg-indigo-600 duration-200'
                >ثبت گزارش</button>
            </form>
        </main>
    )
}

export default Ticket
