import { signOutFn } from '../../firebase/firebaseAuth'
import useGlobalStore from '../state/GlobalState'

export default function Logout() {
  const { setAuth } = useGlobalStore()
  signOutFn().then(() => {
    // TODO: display some cool loading animations in here
    setTimeout(() => {
      setAuth(false)
      // clear all localstorage
      localStorage.clear()
      sessionStorage.clear()
    }, 500)
  })
  return (
    <div className='absolute inset-0 grid place-content-center bg-gray-100'>
      <h1 className='text-4xl font-semibold'>Logging out ...</h1>
    </div>
  )
}
