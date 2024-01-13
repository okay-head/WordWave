import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section
      id='notfound'
      className='mx-auto grid min-h-[80vh] max-w-[50rem] place-content-center'
    >
      <div className='px-4 py-10 text-center sm:px-6 lg:px-8'>
        <h1 className='block text-7xl font-bold text-gray-800 dark:text-white sm:text-9xl'>
          404
        </h1>
        <h1 className='block text-2xl font-bold text-white'></h1>
        <p className='mt-3 text-gray-600 dark:text-gray-400'>
          Oops, something went wrong.
        </p>
        <p className='text-gray-600 dark:text-gray-400'>
          Sorry, we couldn't find your page.
        </p>
        <div className='mt-5 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3'>
          <a
            className='inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-accent-pink-600 px-4 py-3 text-sm font-semibold text-white hover:bg-accent-pink-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-accent-pink-900 dark:hover:bg-accent-pink-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 sm:w-auto'
            href='https://github.com/okay-head/WordWave'
            target='_blank'
          >
            <svg
              className='h-4 w-4 flex-shrink-0'
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              viewBox='0 0 16 16'
            >
              <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
            </svg>
            Get the source code
          </a>
          <Link
            className='dark:hover:text-accent-pink-400 inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent px-4 py-3 text-sm font-semibold text-accent-pink-600 hover:text-accent-pink-800 disabled:pointer-events-none disabled:opacity-50 dark:text-accent-pink-900 dark:hover:text-accent-pink-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 sm:w-auto'
            to='/'
          >
            <svg
              className='h-4 w-4 flex-shrink-0'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='m15 18-6-6 6-6' />
            </svg>
            Back to home
          </Link>
        </div>
      </div>

      <footer className='absolute bottom-8 left-1/2 -translate-x-1/2 text-center'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <p className='text-sm text-gray-500'>© All Rights Reserved. 2024.</p>
        </div>
      </footer>
    </section>
  )
}
