import Logo from './Logo'

export default function Navbar() {
  return (
    <div className='navbar-container'>
      <header className='z-50 flex w-full flex-wrap border-b border-gray-200 bg-white py-3 text-sm shadow-lg dark:border-gray-700 dark:bg-gray-800 sm:flex-nowrap sm:justify-start sm:py-0'>
        <nav
          className='relative mx-auto w-full max-w-7xl px-4 sm:flex sm:items-center sm:justify-between sm:px-6 md:px-8'
          aria-label='Global'
        >
          <div className='flex items-center justify-between'>
            <a
              className='w-[160px] flex-none rounded-md bg-white text-xl font-semibold dark:text-white'
              href='#'
              aria-label='Brand'
            >
              <Logo />
            </a>
            <div className='sm:hidden'>
              <button
                type='button'
                className='hs-collapse-toggle flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                data-hs-collapse='#navbar-collapse-with-animation'
                aria-controls='navbar-collapse-with-animation'
                aria-label='Toggle navigation'
              >
                <svg
                  className='h-4 w-4 hs-collapse-open:hidden'
                  width='16'
                  height='16'
                  fill='currentColor'
                  viewBox='0 0 16 16'
                >
                  <path
                    fillRule='evenodd'
                    d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
                  />
                </svg>
                <svg
                  className='hidden h-4 w-4 flex-shrink-0 hs-collapse-open:block'
                  width='16'
                  height='16'
                  fill='currentColor'
                  viewBox='0 0 16 16'
                >
                  <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
                </svg>
              </button>
            </div>
          </div>
          <div
            id='navbar-collapse-with-animation'
            className='hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 sm:block'
          >
            <div className='mt-5 flex flex-col gap-x-0 gap-y-4 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:gap-x-7 sm:gap-y-0 sm:ps-7'>
              <a
                className='py-1 font-medium hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 sm:py-6'
                href='#'
              >
                Feed
              </a>
              <a
                className='py-1 font-medium hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 sm:py-6'
                href='#'
              >
                Users
              </a>

              <div className='hs-dropdown [--adaptive:none] [--strategy:static] sm:py-4 sm:[--strategy:fixed] sm:[--trigger:hover]'>
                <button
                  type='button'
                  className='flex w-full items-center font-medium hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 '
                >
                  <svg
                    className='me-2 mt-[2px] h-4 w-4 flex-shrink-0'
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    viewBox='0 0 16 16'
                  >
                    <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z' />
                  </svg>
                  Profile
                  <svg
                    className='ms-2 h-2.5 w-2.5 text-gray-600'
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                    ></path>
                  </svg>
                </button>

                <div className='hs-dropdown-menu top-full z-10 hidden rounded-lg bg-white p-2 opacity-0 transition-[opacity,margin] duration-[0.1ms] before:absolute before:-top-5 before:start-0 before:h-5 before:w-full hs-dropdown-open:opacity-100 dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800 sm:w-48 sm:border sm:shadow-md sm:duration-[150ms] sm:dark:border'>
                  <a
                    className='flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                    href='#'
                  >
                    About
                  </a>
                  <div className='hs-dropdown relative [--adaptive:none] [--strategy:static] sm:[--trigger:hover] sm:[--strategy:absolute]'>
                    <button
                      type='button'
                      className='flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                    >
                      Sub Menu
                      <svg
                        className='ms-2 h-2.5 w-2.5 text-gray-600 sm:-rotate-90'
                        width='16'
                        height='16'
                        viewBox='0 0 16 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                        ></path>
                      </svg>
                    </button>

                    <div className='hs-dropdown-menu end-full top-0 z-10 !mx-[10px] hidden rounded-lg bg-white p-2 opacity-0 transition-[opacity,margin] duration-[0.1ms] before:absolute before:-end-5 before:top-0 before:h-full before:w-5 hs-dropdown-open:opacity-100 dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800 sm:mt-2 sm:w-48 sm:border sm:shadow-md sm:duration-[150ms] sm:dark:border'>
                      <a
                        className='flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                        href='#'
                      >
                        About
                      </a>
                      <a
                        className='flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                        href='#'
                      >
                        Downloads
                      </a>
                      <a
                        className='flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                        href='#'
                      >
                        Team Account
                      </a>
                    </div>
                  </div>

                  <a
                    className='flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                    href='#'
                  >
                    Downloads
                  </a>
                  <a
                    className='flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                    href='#'
                  >
                    Team Account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
