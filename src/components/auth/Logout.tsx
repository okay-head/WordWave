import { signOutFn } from '../../firebase/firebaseAuth'
import useGlobalStore from '../state/GlobalState'
import placeHolderDataUser from '../user/placeHolderData'

export default function Logout() {
  const setAuth = useGlobalStore((state) => state.setAuth)
  const setUser = useGlobalStore((state) => state.setUser)
  signOutFn().then(() => {
    // TODO: display some cool loading animations in here
    setTimeout(() => {
      // reset state
      setUser(placeHolderDataUser[0])
      setAuth(false)

      // clear all localstorage
      localStorage.clear()
      sessionStorage.clear()
    }, 500)
  })
  return (
    // additional 1vh height to prevent scrollbar jump layout shift
    <div className='absolute inset-0 grid min-h-[101vh] place-content-center bg-gray-100'>
      <h1 className='text-4xl font-semibold'>Logging out ...</h1>
    </div>
  )
}
