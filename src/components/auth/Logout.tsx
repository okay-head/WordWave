import { signOutFn } from '../../firebase/firebaseAuth'
import useGlobalStore from '../state/GlobalState'

export default function Logout() {
  const { setAuth } = useGlobalStore()
  signOutFn().then(() => {
    setTimeout(() => {
      setAuth(false)
    }, 500)
  })
  return (
    <div className='absolute inset-0 grid place-content-center bg-gray-100'>
      <h1 className='text-4xl font-semibold'>Logging out ...</h1>
    </div>
  )
}
