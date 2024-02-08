type T = {
  id: string
  children: React.ReactNode
  classVars?: string
}
type A = React.ComponentPropsWithoutRef<'button'>
export default function TabBtn(
  { id, children, classVars = '' }: T,
  attributes: A,
) {
  return (
    <button
      id={id}
      type='button'
      className={`relative min-w-0 flex-1 overflow-hidden border-s border-t-2 p-2 text-center text-sm font-medium text-gray-500 first:border-s-0 hover:bg-gray-50 hover:text-gray-700 focus:z-10 focus:text-accent-pink-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50 hs-tab-active:border-t-accent-pink-600 hs-tab-active:text-gray-900 dark:border-l-gray-700 dark:border-t-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-400 dark:hs-tab-active:border-t-accent-pink-900 dark:hs-tab-active:text-white ${classVars}`}
      {...attributes}
      role='tab'
    >
      {children}
    </button>
  )
}
