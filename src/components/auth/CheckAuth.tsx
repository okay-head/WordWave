import { useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import useGlobalStore from '../state/GlobalState'

export default function CheckAuth() {
  const { auth } = useGlobalStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (!auth) navigate('/auth/signin')
  }, [])

  return (
    <>
      <Outlet />
    </>
  )
}
