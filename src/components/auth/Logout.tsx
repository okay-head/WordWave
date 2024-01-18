import useGlobalStore from '../state/GlobalState'

export default function Logout() {
  const { setAuth } = useGlobalStore()
  setTimeout(() => {
    setAuth(false)
  }, 500)
  return (
    <div className='absolute inset-0 grid place-content-center bg-gray-100'>
      <h1 className='text-4xl font-semibold'>PLEASE WAIT ...</h1>
    </div>
  )
}
