import Container from '../shared/Container'
import ErrorSvg from './ErrorSvg'
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'
import toast from 'react-hot-toast'
import { useEffect } from 'react'
import useGlobalStore from '../state/GlobalState'
import { Link, useNavigate } from 'react-router-dom'
import { signInFn } from '../../firebase/firebaseAuth'
import genErrMsg from './genErrMsg'
import { getFn } from '../../firebase/firebaseDb'

export default function SignIn() {
  const auth = useGlobalStore((state) => state.auth)
  const setAuth = useGlobalStore((state) => state.setAuth)
  const setUser = useGlobalStore((state) => state.setUser)
  const navigate = useNavigate()
  useEffect(() => {
    if (auth) navigate('/')
  }, [auth])

  const formSchema = z.object({
    email: z
      .string()
      .trim()
      .toLowerCase()
      .min(1, 'Please enter your email')
      .email(),
    password: z
      .string()
      .trim()
      .min(1, 'Please enter your password')
      .min(8, 'Password must be min 8 characters long'),
  })

  type TForm = z.infer<typeof formSchema>

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<TForm> = ({ email, password }) => {
    // --- Send to db ---
    signInFn(email, password)
      .then((user) => {
        toast.success('Signed In!')

        // get user from db
        getFn(`users/${user.user.uid}`).then((userObj) => {
          // set user in context
          setUser(userObj)

          // redirect after a timeout [NEED ANIMATION]
          setTimeout(() => {
            toast.dismiss()
            setAuth(true)
          }, 1000)
        })
      })
      .catch((message) => {
        toast.error(<p className='text-center text-sm'>{genErrMsg(message)}</p>)
      })
  }
  const onError: SubmitErrorHandler<TForm> = (err) => console.warn(err)
  return (
    <Container classVars='mt-24'>
      <div className='signinPage h-full grid-cols-2 gap-4 md:grid'>
        <article className='hero-img-signin hidden h-full place-items-center md:grid'>
          <img
            src='/assets/signin-light.svg'
            alt='hero-img-signin'
            className='w-3/4'
          />
        </article>

        <article
          id='signinBox'
          className='mx-auto w-full max-w-md items-center'
        >
          <div className='rounded-xl bg-white shadow-md dark:border-gray-700 dark:bg-gray-800'>
            <div className='p-4 sm:p-7'>
              <div className='text-center'>
                <h1 className='block text-2xl font-bold text-gray-800 dark:text-white'>
                  Sign in
                </h1>
                <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
                  Don't have an account?{' '}
                  <Link
                    to='/auth/signup'
                    className='rounded-md p-1 py-2 font-medium 
                  text-accent-pink-600 decoration-2 hover:bg-gray-100
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-pink-500 dark:text-accent-pink-900  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                  >
                    Sign up here
                  </Link>
                </p>
              </div>

              <div className='mt-5'>
                <button
                  onClick={() => {
                    toast.loading('N/A. Coming soon')
                    setTimeout(() => {
                      toast.dismiss()
                    }, 1200)
                  }}
                  type='button'
                  className='inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium 
                text-gray-800 shadow-sm focus-within:ring-accent-pink-500
                hover:bg-gray-50 focus:outline-none focus:ring-2 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                >
                  <svg
                    className='h-auto w-4'
                    width='46'
                    height='47'
                    viewBox='0 0 46 47'
                    fill='none'
                  >
                    <path
                      d='M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z'
                      fill='#4285F4'
                    />
                    <path
                      d='M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z'
                      fill='#34A853'
                    />
                    <path
                      d='M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z'
                      fill='#FBBC05'
                    />
                    <path
                      d='M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z'
                      fill='#EB4335'
                    />
                  </svg>
                  Sign in with Google
                </button>

                <div className='flex items-center py-3 text-xs uppercase text-gray-400 before:me-6 before:flex-[1_1_0%] before:border-t before:border-gray-200 after:ms-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600'>
                  Or
                </div>

                {/* <!-- Form --> */}
                <form onSubmit={handleSubmit(onSubmit, onError)}>
                  <div className='grid gap-y-4'>
                    {/* <!-- Form Group --> */}
                    <div>
                      <label
                        htmlFor='email'
                        className='mb-2 block text-sm dark:text-white'
                      >
                        Email address
                      </label>
                      <div className='relative'>
                        <input
                          {...register('email')}
                          type='email'
                          id='email'
                          name='email'
                          className='block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-accent-pink-500 focus:ring-accent-pink-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600'
                          aria-describedby='email-error'
                        />
                        {errors?.email && <ErrorSvg />}
                      </div>

                      <p className='mt-2 text-xs text-red-600' id='email-error'>
                        {errors?.email?.message}
                      </p>
                    </div>
                    <div>
                      <label
                        htmlFor='password'
                        className='mb-2 block text-sm dark:text-white'
                      >
                        Password
                      </label>
                      <div className='relative'>
                        <input
                          {...register('password')}
                          type='password'
                          id='password'
                          name='password'
                          className='block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-accent-pink-500 focus:ring-accent-pink-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600'
                          aria-describedby='password-error'
                        />
                        {errors?.password && <ErrorSvg />}
                      </div>
                      <p
                        className='mt-2  text-xs text-red-600'
                        id='password-error'
                      >
                        {errors?.password?.message}
                      </p>
                    </div>
                    {/* <!-- End Form Group --> */}

                    <button
                      type='submit'
                      className='dark:focus-visible:ring-accent-gray-600 mt-3 inline-flex w-full items-center 
                    justify-center gap-x-2 rounded-lg 
                    border border-transparent bg-accent-pink-600 px-4 py-3 text-sm font-semibold text-white hover:bg-accent-pink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-pink-600 disabled:pointer-events-none disabled:opacity-50 dark:bg-accent-pink-900 dark:hover:bg-accent-pink-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                    >
                      Sign in
                    </button>
                  </div>
                </form>
                {/* <!-- End Form --> */}
              </div>
            </div>
          </div>
        </article>
      </div>
    </Container>
  )
}
