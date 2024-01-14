import Card from './shared/Card'
import Container from './shared/Container'

export default function Home() {
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

      <button className='fixed bottom-8 right-8 block  h-12 w-12 rounded-full bg-accent-pink-600 shadow-lg transition-all hover:scale-[1.05] hover:shadow-xl'>
        <img
          src='/assets/plus.png'
          alt='plus icon'
          className='absolute left-1/2 top-1/2 mx-auto h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2'
        />
      </button>
    </Container>
  )
}
