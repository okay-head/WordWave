export default function UserCard() {
  return (
    <article className='card mt-8'>
      <div className='flex flex-col rounded-xl border bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-slate-900 dark:shadow-slate-700/[.7] md:p-5'>
        <section className='card-header flex'>
          <div className='flex items-center gap-3'>
            <span className='block h-10 w-10 rounded-full bg-gray-200'></span>
            <div>
              <h3 className='text-lg font-semibold text-gray-800 dark:text-white'>
                Author name
              </h3>
              <p className='-mt-[2px] text-xs font-medium text-accent-pink-500 dark:text-accent-pink-900'>
                @username
              </p>
            </div>
          </div>
          {/* <button className='mb-3 ms-auto inline-flex items-center gap-x-1.5 rounded-full border border-gray-500 px-3 py-1.5 text-xs font-medium text-gray-500 dark:text-gray-400'>
            FOLLOW
          </button> */}
          <button className='mb-1.5 ms-auto mt-1.5 inline-flex items-center gap-x-1.5 rounded-full bg-accent-pink-500 px-3 py-1.5 text-xs font-medium text-white transition-all hover:bg-accent-pink-600 dark:bg-accent-pink-900'>
            FOLLOW
          </button>
        </section>

        <div className='ms-14 mt-2 text-gray-500 dark:text-gray-400'>
          <p> Crypto. Investing. Market manipulation.</p>
          <p> All opinions are mine</p>
        </div>

        <div className='chips ms-14 mt-7 flex gap-3 text-sm text-gray-500 dark:text-gray-400'>
          <span className='border-r pr-3'>
            <b className='font-semibold'>450</b> Followers{' '}
          </span>
          <span>
            <b className='font-semibold'>750</b> Following{' '}
          </span>
        </div>
      </div>
    </article>
  )
}
