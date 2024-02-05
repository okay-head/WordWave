import { useEffect, useRef, useState } from 'react'
import Container from '../shared/Container'
import useGlobalStore from '../state/GlobalState'
import { getKey, setFn, updateData } from '../../firebase/firebaseDb'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function CreateWave() {
  // IMPROVEMENT: Performance
  // console.log('render')

  const [isError, setIsError] = useState(false)
  const [textArea, setTextArea] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const userObjContext = useGlobalStore((state) => state.user)
  const setUserObjContext = useGlobalStore((state) => state.setUser)

  const navigate = useNavigate()
  // push id needs to persist between renders, such that only one tweet makes it to the db
  const tweetIdRef = useRef<string | undefined | null>(null)

  const onSubmitHandler = async () => {
    setSubmitted(true)

    // Calls
    // 1) call to /tweets endpoint for new tweet creation
    // 2) call to /users/user_id/user_tweets utilizing the tweet id
    // 3) update context

    tweetIdRef.current = getKey('tweets')
    if (!tweetIdRef.current) return

    const updatePayload =
      userObjContext.user_tweets[0] == '0'
        ? { ...[tweetIdRef.current] }
        : {
            ...[...userObjContext.user_tweets, tweetIdRef.current],
          }
    const tweetPayload = {
      id: tweetIdRef.current,
      author_name: userObjContext.user_name,
      author_handle: userObjContext.user_handle,
      author_id: userObjContext.user_id,
      date: Date.now(),
      body: textArea,
    }

    // update user object and tweet
    // either both fail or succeed
    Promise.all([
      setFn(`tweets/${tweetIdRef.current}`, tweetPayload),
      updateData(`users/${userObjContext.user_id}/user_tweets`, updatePayload),
    ])
      .then(() => {
        toast.success('New wave created!')
        //update context
        const newUser = {
          ...userObjContext,
          user_tweets: Object.values(updatePayload) as string[],
        }
        setUserObjContext(newUser)
        setTimeout(() => {
          navigate('/')
          toast.dismiss()
        }, 900)
      })
      .catch((err) => {
        setSubmitted(false)
        toast.dismiss()
        toast.error('Operation failed! Try again later')
        console.log(err)
      })
  }

  function errorFn() {
    if (243 - Number(textArea.trim().length) < 0) {
      setIsError(true)
      console.log(isError, 'Error persists!')
      return
    }
    setIsError(false)
  }

  useEffect(() => {
    errorFn()
  }, [textArea])

  return (
    <div className='createwave'>
      <Container classVars='max-w-2xl'>
        <h1 className='-mt-8 border-b-2 pb-3 text-3xl font-semibold dark:border-gray-700 dark:text-white'>
          Create a Wave
        </h1>

        <article className='wysiwyg-editor mt-7'>
          <label
            htmlFor='hs-validation-name-error'
            className={`mb-2 flex justify-between text-sm font-medium dark:text-white mx-3${
              isError ? ' text-red-500' : ''
            }`}
          >
            <span className='block'>Enter atleast 39 characters</span>
            <span className='ms-auto block'>
              {243 - Number(textArea.trim().length)}
            </span>
          </label>

          <div className='relative'>
            <textarea
              onChange={(e) => {
                setTextArea(e.target.value)
              }}
              id='hs-validation-name-error'
              className={`block min-h-32 w-full rounded-lg px-4 py-4 text-sm outline-0 focus:border-accent-pink-600  focus:shadow-sm focus:shadow-accent-pink-500  focus:ring-0 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600${
                isError
                  ? ' !border-red-500 focus:!border-red-500 focus:shadow-sm focus:!shadow-red-300'
                  : ''
              }`}
              rows={3}
              placeholder={`Whats popping ${userObjContext.user_name} ...?`}
              aria-describedby='hs-validation-name-error-helper'
              value={textArea}
              required
            ></textarea>

            {isError && (
              <div className='error-svg pointer-events-none absolute end-0 top-0 flex items-center p-3'>
                <svg
                  className='h-4 w-4 flex-shrink-0 text-red-500'
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
                  <circle cx='12' cy='12' r='10' />
                  <line x1='12' x2='12' y1='8' y2='12' />
                  <line x1='12' x2='12.01' y1='16' y2='16' />
                </svg>
              </div>
            )}
          </div>
          {submitted && Number(textArea.trim().length) < 39 && (
            <p
              className='error-message mt-2 text-sm text-red-600'
              id='hs-validation-name-error-helper'
            >
              Your message should be at least 39 characters long.
            </p>
          )}
        </article>

        <p
          title={
            isError || Number(textArea.trim().length) < 39
              ? 'Enter atleast 39 characters'
              : ''
          }
          className='submit-btn ms-2 mt-6'
        >
          <button
            onClick={onSubmitHandler}
            type='button'
            disabled={isError || Number(textArea.trim().length) < 39}
            className='inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-accent-pink-600 px-4 py-2 text-sm font-semibold text-white hover:bg-accent-pink-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
          >
            Post
          </button>
        </p>

        <img
          src='/assets/typewriter.svg'
          alt='[ Create article ]'
          className='mx-auto mt-12 w-[60%] min-w-64 sm:mt-4'
        />
      </Container>
    </div>
  )
}
