import { useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import useGlobalStore from '../state/GlobalState'

export default function CheckAuth() {
  // we are using 2 ways to set authetication status??
  const { auth } = useGlobalStore()
  const navigate = useNavigate()
  const user = useGlobalStore((state) => state.user)

  useEffect(() => {
    // we do 2 things here -
    //i) if a user types in url to one of the 'protected' pages, redirect to '/'
    //ii) if a user is authorised, set the 'user' object
    if (auth) {
    } else navigate('/')
  }, [auth])

  return (
    <>
      <Outlet />
    </>
  )
}

// //update context from localstorage
// const localItem = localStorage.getItem('firebaseAuthObj')
// if (localItem != '' && localItem != null)
//   setfirebaseAuthObj(JSON.parse(localItem))

// [LATEST] if user is authenticated, i.e. signed up or signed In
// set user object in context

// store the user object in context once <SignIN>/ <CreateProfile>
// logic in their respective profiles
// need to organize all this logic in one SINGLE component-> <isFinallySignedIn>
