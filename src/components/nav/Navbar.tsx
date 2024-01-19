import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo'
import NavDropdown from './NavDropdown'

export default function Navbar() {
  const navListItems = [
    {
      id: 'Feed',
      to: '/',
      imgSrc: '/assets/icons8-feed-32.png',
      imgVars: 'w-4 mt-[2px]',
    },
    {
      id: 'Users',
      to: '/users',
      imgSrc: '/assets/icons8-users-32.png',
      imgVars: 'w-5 me-1',
    },
  ].map((x, i) => {
    return (
      <NavLink
        key={i}
        id={x.id}
        className={`rounded-sm py-1 font-semibold tracking-wide transition-all hover:text-accent-pink-600 dark:text-gray-400 dark:hover:text-gray-500 sm:my-5 sm:px-1`}
        to={x.to}
      >
        <div className='flex items-center gap-1'>
          <img src={x.imgSrc} alt={x.id} className={x.imgVars} />
          <p>{x.id}</p>
        </div>
      </NavLink>
    )
  })
  return (
    <div className='navbar-container'>
      <header className='z-50 flex w-full flex-wrap border-b border-gray-200 bg-white py-3 text-sm shadow-md dark:border-gray-700 dark:bg-gray-800 sm:flex-nowrap sm:justify-start sm:py-0'>
        <nav
          className='relative mx-auto w-full max-w-7xl px-4 sm:flex sm:items-center sm:justify-between sm:px-6 md:px-8'
          aria-label='Global'
        >
          <div className='flex items-center justify-between'>
            <Link
              to='/'
              className='w-[160px] flex-none rounded-md bg-white text-xl font-semibold dark:text-white'
              aria-label='Brand'
            >
              <Logo />
            </Link>
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
            <div className='mt-5 flex flex-col gap-x-0 gap-y-4 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:gap-x-6 sm:gap-y-0 sm:ps-7'>
              {navListItems}
              <NavDropdown />
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
