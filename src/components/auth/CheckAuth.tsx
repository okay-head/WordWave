import { useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

export default function CheckAuth() {
  const auth = true
  const navigate = useNavigate()

  useEffect(() => {
    if (!auth) navigate('/auth/signin')
  })

  return (
    <>
      <Outlet />
    </>
  )
}
