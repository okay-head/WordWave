import useGlobalStore from '../state/GlobalState'
import NavDropdownListItem from './NavDropdownListItem'
export default function NavDropdown() {
  const { auth } = useGlobalStore()
  const listArray = [
    {
      text: 'Profile',
      icon: '/icons8-customer-32.png',
      linkTo: '/:id/profile',
    },
    { text: 'Write', icon: '/icons8-create-32.png', linkTo: '/:id/create' },
    { text: 'Logout', icon: '/icons8-logout-32.png', linkTo: '/:id/logout' },
  ] as const

  const listArray2 = [
    { text: 'Login', icon: '/icons8-logout-32.png', linkTo: '/auth/signin' },
  ] as const

  //iterating over items
  const listItems = listArray.map((x, i) => (
    <NavDropdownListItem key={i} x={x} />
  ))
  const listItems2 = listArray2.map((x, i) => (
    <NavDropdownListItem key={i} x={x} />
  ))

  return (
    <div className='NavDropdown flex flex-row items-center gap-2'>
      <div
        className='hs-dropdown relative inline-flex'
        data-hs-dropdown-placement='bottom-right'
      >
        <button
          id='hs-dropdown-with-header'
          type='button'
          className='inline-flex items-center justify-center gap-x-2 rounded-full text-sm font-semibold text-white outline-none transition-all duration-100 hover:bg-white/20 hover:ring-2 hover:ring-accent-pink-500 focus:ring-2 focus:ring-accent-pink-600 disabled:pointer-events-none disabled:opacity-50'
        >
          <img
            className='inline-block h-8 w-8 rounded-full sm:h-[2.375rem] sm:w-[2.375rem]'
            src='/assets/user.webp'
            alt='avatar'
          />
        </button>

        <div
          className={`hs-dropdown-menu duration z-10 hidden rounded-lg bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:border dark:border-gray-700 dark:bg-gray-800 ${
            auth ? 'min-w-[15rem]' : ''
          }`}
          aria-labelledby='hs-dropdown-with-header'
        >
          {auth ? (
            <div>
              <div className='-m-2 rounded-t-lg bg-gray-100 px-5 py-3 dark:bg-gray-700'>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  Signed in as
                </p>
                <p className='text-sm font-medium text-gray-800 dark:text-gray-300'>
                  @itspicklerick
                </p>
              </div>
              <div className='mt-2 py-2 first:pt-0 last:pb-0'>{listItems}</div>
            </div>
          ) : (
            listItems2
          )}
        </div>
      </div>
    </div>
  )
}
