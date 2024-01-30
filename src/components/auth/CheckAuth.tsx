import { useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import useGlobalStore from '../state/GlobalState'

export default function CheckAuth() {
  // check if user is authenticated
  // we are using 2 ways to set authetication status??
  const { auth } = useGlobalStore()
  const navigate = useNavigate()
  const setfirebaseAuthObj = useGlobalStore((state) => state.setfirebaseAuthObj)

  useEffect(() => {
    if (auth) {
      //update context from localstorage
      const localItem = localStorage.getItem('firebaseAuthObj')
      if (localItem != '' && localItem != null)
        setfirebaseAuthObj(JSON.parse(localItem))
    } else navigate('/')
  }, [auth])

  return (
    <>
      <Outlet />
    </>
  )
}
