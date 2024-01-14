export default function Card() {
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
          <span className='ms-auto text-xs text-gray-500 dark:text-gray-400'>
            10 mins ago
          </span>
        </section>

        <p className='mt-2 text-gray-500 dark:text-gray-400'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content. Some quick example text to build on the
          card title and make up the bulk of the card's content.
        </p>
      </div>
    </article>
  )
}
