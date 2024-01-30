import { useEffect, useState } from 'react'
import Container from '../shared/Container'
import UserCard from './UserCard'
import { getFn } from '../../firebase/firebaseDb'
import placeHolderDataUser from '../user/placeHolderData'

export default function Users() {
  const [userData, setUserData] = useState(placeHolderDataUser)
  useEffect(() => {
    getFn('/users/')
      .then((res) => setUserData(Object.values(res)))
      .catch((err) => console.error(err))
  }, [])
  return (
    <Container classVars='max-w-xl'>
      <h1 className='-mt-8 border-b-2 pb-3 text-3xl font-semibold dark:border-gray-700 dark:text-white'>
        All users
      </h1>
      <div className='cards-container'>
        {userData?.map((x, i) => {
          return <UserCard key={i} {...x} />
        })}
      </div>
    </Container>
  )
}
