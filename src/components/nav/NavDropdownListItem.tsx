import { Link } from 'react-router-dom'
type T = {
  x: { linkTo: string; text: string; icon: string }
  classVars?: string
}
export default function NavDropdownListItem({ x, classVars = '' }: T) {
  return (
    <Link
      to={x.linkTo}
      className={`flex items-center gap-x-2.5 rounded-lg px-3 py-2 text-sm outline-none ring-inset hover:bg-gray-100  focus:ring-accent-pink-500 focus-visible:outline-0 focus-visible:ring-1 focus-visible:ring-accent-pink-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 ${classVars}`}
    >
      <img src={`/assets/${x.icon}`} alt='icon' className='w-5' />
      {x.text}
    </Link>
  )
}
