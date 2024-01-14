import Container from '../shared/Container'
import UserCard from './UserCard'

export default function Users() {
  return (
    <Container classVars='max-w-xl'>
      <h1 className='-mt-8 border-b-2 pb-3 text-3xl font-semibold dark:border-gray-700 dark:text-white'>
        All users
      </h1>
      <div className='cards-container'>
        {[1, 2, 3, 4, 5, 6, 7].map((_, i) => {
          return <UserCard key={i} />
        })}
      </div>
    </Container>
  )
}
