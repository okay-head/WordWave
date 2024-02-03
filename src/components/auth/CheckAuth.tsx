import { useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import useGlobalStore from '../state/GlobalState'

export default function CheckAuth() {
  const { auth } = useGlobalStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (!auth) navigate('/')
  }, [auth])

  return (
    <>
      <Outlet />
    </>
  )
}

// store the user object in context once <SignIN>/ <CreateProfile>
// logic in their respective profiles
// need to organize all this logic in one SINGLE component-> <isFinallySignedIn>
