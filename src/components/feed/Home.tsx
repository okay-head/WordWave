import { Link } from 'react-router-dom'
import Card from '../shared/Card'
import Container from '../shared/Container'
import useGlobalStore from '../state/GlobalState'
import { getFn } from '../../firebase/firebaseDb'
import { useEffect, useState } from 'react'
import placeHolderData from './placeholderData'

export default function Home() {
  const [tweets, setTweets] = useState(placeHolderData)
  const [data, setData] = useState(placeHolderData)

  const [option, setOption] = useState<'Following' | 'All'>('Following')
  const {
    auth,
    user: { user_id, user_following },
  } = useGlobalStore()

  // some spaghetti code

  // fetch tweets from the db when the component mounts
  // 1. If not authenticated return all tweets
  // 2. If authenticated then serve filtered tweets by default

  // the problem is that you're hitting the database more than it is needed
  // in fact every time you toggle, you are making a get request
  // therefore you first store the incoming data in a state (data), then perform operations on it
  useEffect(() => {
    getFn('/tweets/')
      .then((res) => {
        setData(Object.values(res))
        tweetSetter(Object.values(res))
      })
      .catch((err) => console.error(err))
  }, [])

  const tweetSetter = (data: Ttweet[]) => {
    if (option == 'All' || !auth) {
      setTweets(data)
      return
    }
    const filtered: Ttweet[] = data.filter((x) => {
      const current = x as Ttweet
      const found = user_following.find((el) => el == current.author_id)

      if (found) return true
      return false
    })
    setTweets(filtered)
  }
  useEffect(() => {
    tweetSetter(data)
  }, [option])

  const filterDropDown = (
    <div
      className='feed-filter-dropdown hs-dropdown relative ms-auto inline-flex'
      data-hs-dropdown-auto-close='inside'
    >
      <button
        id='hs-dropdown-item-checkbox'
        type='button'
        className='hs-dropdown-toggle inline-flex items-center gap-x-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
      >
        {option}
        <svg
          className='h-4 w-4 hs-dropdown-open:rotate-180'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='m6 9 6 6 6-6' />
        </svg>
      </button>

      <div
        className='hs-dropdown-menu duration mt-2 hidden min-w-[15rem] rounded-lg bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:border dark:border-gray-700 dark:bg-gray-800'
        aria-labelledby='hs-dropdown-item-checkbox'
      >
        <div className='relative flex items-start rounded-lg px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700'>
          <div className='mt-1 flex h-5 items-center'>
            <input
              onChange={() => {
                setOption('Following')
              }}
              id='hs-dropdown-item-radio-delete'
              name='hs-dropdown-item-radio'
              type='radio'
              className='shrink-0 rounded-full border-gray-200 text-accent-pink-600 focus:ring-0 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:checked:border-accent-pink-500 dark:checked:bg-accent-pink-500 dark:focus:ring-offset-gray-800'
              aria-describedby='hs-dropdown-item-radio-delete-description'
              defaultChecked
            />
          </div>
          <label htmlFor='hs-dropdown-item-radio-delete' className='ms-3.5'>
            <span className='block text-sm font-semibold text-gray-800 dark:text-gray-300'>
              Following
            </span>
            <span
              id='hs-dropdown-item-radio-delete-description'
              className='block text-sm text-gray-600 dark:text-gray-500'
            >
              Show waves by the users you follow
            </span>
          </label>
        </div>
        <div className='relative flex items-start rounded-lg px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700'>
          <div className='mt-1 flex h-5 items-center'>
            <input
              onChange={() => {
                setOption('All')
              }}
              id='hs-dropdown-item-radio-archive'
              name='hs-dropdown-item-radio'
              type='radio'
              className='shrink-0 rounded-full border-gray-200 text-accent-pink-600 focus:ring-0 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:checked:border-accent-pink-500 dark:checked:bg-accent-pink-500 dark:focus:ring-offset-gray-800'
              aria-describedby='hs-dropdown-item-radio-archive-description'
            />
          </div>
          <label htmlFor='hs-dropdown-item-radio-archive' className='ms-3.5'>
            <span className='block text-sm font-semibold text-gray-800 dark:text-gray-300'>
              All
            </span>
            <span
              id='hs-dropdown-item-radio-archive-description'
              className='block text-sm text-gray-600 dark:text-gray-500'
            >
              Show all waves
            </span>
          </label>
        </div>
      </div>
    </div>
  )

  return (
    <Container classVars='max-w-2xl '>
      <div className='-mt-8 flex gap-4 border-b-2 pb-3'>
        <h1 className='text-3xl font-semibold dark:text-white'>
          {!auth ? 'All' : option == 'Following' ? 'Your' : option} waves
        </h1>
        {auth ? filterDropDown : ''}
      </div>
      <div className='cards-container'>
        {tweets?.map((element, i) => <Card key={i} {...element} />)}
      </div>
      <Link
        to={auth ? `/${user_id}/create` : '/auth/signin'}
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
