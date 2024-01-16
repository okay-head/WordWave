import { useEffect, useState } from 'react'
import Container from '../shared/Container'

export default function CreateWave() {
  const currentUser = 'Rick astley' //pull from context
  const [isError, setIsError] = useState(false)
  const [textArea, setTextArea] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function onSubmitHandler() {
    console.log(textArea)
    console.log('send to db')
    // toast notif
    setSubmitted(true)
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

        <article className='wysiwyg-editor mt-6'>
          <div className='flex'>
            <label
              htmlFor='hs-validation-name-error'
              className={`mb-2 ms-auto block text-sm font-medium dark:text-white${
                isError ? ' text-red-500' : ''
              }`}
            >
              {243 - Number(textArea.trim().length)}
            </label>
          </div>

          <div className='relative'>
            <textarea
              onChange={(e) => {
                setTextArea(e.target.value)
              }}
              id='hs-validation-name-error'
              className={`block min-h-32 w-full rounded-lg px-7 py-3 text-sm outline-0 focus:border-accent-pink-600  focus:shadow-sm focus:shadow-accent-pink-500  focus:ring-0 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600${
                isError
                  ? ' !border-red-500 focus:!border-red-500 focus:shadow-sm focus:!shadow-red-300'
                  : ''
              }`}
              rows={3}
              placeholder={`Whats popping ${currentUser} ...?`}
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
          title={isError ? '' : 'Enter atleast 39 characters'}
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
      </Container>
    </div>
  )
}
