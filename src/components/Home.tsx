import { Link } from 'react-router-dom'
import Card from './shared/Card'
import Container from './shared/Container'
import useGlobalStore from './state/GlobalState'

export default function Home() {
  const { auth } = useGlobalStore()
  return (
    <Container classVars='max-w-2xl'>
      <h1 className='-mt-8 border-b-2 pb-3 text-3xl font-semibold dark:border-gray-700 dark:text-white'>
        All waves
      </h1>
      <div className='cards-container'>
        {[1, 2, 3, 4, 5, 6, 7].map((_, i) => {
          return <Card key={i} />
        })}
      </div>

      <Link
        to={auth ? '/:id/create' : '/auth/signin'}
        className='group fixed bottom-8 right-8  block h-12 w-12 rounded-full bg-accent-pink-600 shadow-lg transition-all hover:scale-[1.03] hover:shadow-xl'
      >
        <div className='absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-nowrap rounded-[5px] bg-[#2e2e2e] px-3.5 py-1.5 text-sm text-white opacity-0 transition-all group-hover:opacity-100'>
          <span className='absolute bottom-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 bg-[#2e2e2e]'></span>
          Create
        </div>
        <img
          src='/assets/plus.png'
          alt=''
          className='absolute left-1/2 top-1/2 mx-auto h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2'
        />
      </Link>
    </Container>
  )
}
