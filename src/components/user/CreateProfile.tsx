import Container from '../shared/Container'
import ErrorSvg from '../auth/ErrorSvg'
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import useGlobalStore from '../state/GlobalState'
import { setFn } from '../../firebase/firebaseDb'

export default function CreateProfile() {
  const placeHolderText = 'King of vegetables 👑.\nPortable. Durable. Tasty.'
  const navigate = useNavigate()
  const { uid } = useGlobalStore((state) => state.firebaseAuthObj)

  const formSchema = z.object({
    name: z
      .string()
      .trim()
      .min(1, 'Please enter a user name')
      .max(20, 'User name must be within 20 characters'),
    handle: z
      .string()
      .trim()
      .toLowerCase()
      .min(2, 'Please enter a user handle')
      .max(16, 'User handle must be within 16 characters')
      .startsWith('@', "Must start with an '@'"),
    bio: z
      .string()
      .trim()
      .min(1, 'Please enter a bio')
      .max(100, 'Bio must be within 100 chars'),
  })

  type TForm = z.infer<typeof formSchema>

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      handle: '',
      bio: '',
    },
  })

  const onSubmit: SubmitHandler<TForm> = ({ name, handle, bio }) => {
    // console values

    // package a payload consisting of userauthinfo and these vals

    // Now i dont need to store id, password in db but i do need to make a req to db/auth.uid
    // how do i get access to the auth object
    // i can save the current auth var in zustand, by binding it to onAuthStateChanged

    const payload: TuserPayload = {
      user_id: uid,
      user_name: name,
      user_handle: handle,
      user_bio: bio,
      user_tweets: ['0'],
      user_followers: ['0'],
      user_following: ['0'],
    }

    console.log({ payload, postUrl: `db/users/${uid}` })

    // --- Send to db ---
    setFn(`users/${uid}`, payload)
      .then(() => {
        toast.success('Successfully created!')
        setTimeout(() => {
          toast.dismiss()
          navigate(`/`)
        }, 1500)
      })
      .catch((message) => {
        toast.dismiss()
        toast.error('DB Error')
        console.error(message)
      })

    // signUpFn(values.email, values.password)
    //   .then((user) => {
    //     console.log(user)
    //     // --- Notifications ---
    //     const toast1 = toast.success('Successfully created!')
    //     const timeOut = new Promise((resolve) => {
    //       setTimeout(() => {
    //         toast.dismiss(toast1)
    //         resolve('')
    //       }, 800)
    //     })
    //     // only launch this after the above toast gets dismissed
    //     timeOut.then(() => toast.loading('Redirecting'))
    //     // why are we waiting 1.5 seconds to dismiss it idk
    //     setTimeout(() => {
    //       toast.dismiss()
    //       setAuth(true)
    //       console.log(values)
    //     }, 1500)
    //   })
    //   .catch((message) => {
    //     toast.error(<p className='text-center text-sm'>{message}</p>)
    // })
  }
  const onError: SubmitErrorHandler<TForm> = (err) => console.warn(err)
  return (
    <Container>
      <div className='createProfilePage grid-cols-2 gap-4 md:grid'>
        <article className='hero-img-createProfile order-1 hidden place-items-center pt-8 md:grid'>
          <img
            src='/assets/createProfile-light.svg'
            alt='hero-img-createProfile'
            className='w-3/4'
          />
        </article>

        <article
          id='createProfileBox'
          className='mx-auto w-full max-w-md items-center'
        >
          <div className='rounded-xl bg-white shadow-md dark:border-gray-700 dark:bg-gray-800'>
            <div className='p-4 sm:p-7'>
              <div className=''>
                <h1 className='block text-2xl font-bold text-gray-800 dark:text-white'>
                  Finish setting up your profile
                </h1>
              </div>

              <div className='mt-6'>
                {/* <!-- Form --> */}
                <form onSubmit={handleSubmit(onSubmit, onError)}>
                  <div className='grid gap-y-4'>
                    {/* <!-- Form Group --> */}
                    <div>
                      <label
                        htmlFor='name'
                        className='mb-2 block text-sm dark:text-white'
                      >
                        Set your display name
                      </label>
                      <div className='relative'>
                        <input
                          {...register('name')}
                          type='text'
                          id='name'
                          name='name'
                          placeholder='Mr. Potato'
                          className='block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-accent-pink-500 focus:ring-accent-pink-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600'
                          aria-describedby='name-error'
                        />
                        {errors?.name && <ErrorSvg />}
                      </div>

                      <p className='mt-2 text-xs text-red-600' id='name-error'>
                        {errors?.name?.message}
                      </p>
                    </div>
                    <div>
                      <label
                        htmlFor='handle'
                        className='mb-2 block text-sm dark:text-white'
                      >
                        Pick a user handle
                      </label>
                      <div className='relative'>
                        <input
                          {...register('handle')}
                          type='text'
                          id='handle'
                          name='handle'
                          placeholder='@iamapotato'
                          className='block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-accent-pink-500 focus:ring-accent-pink-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600'
                          aria-describedby='email-error'
                        />
                        {errors?.handle && <ErrorSvg />}
                      </div>

                      <p
                        className='mt-2 text-xs text-red-600'
                        id='handle-error'
                      >
                        {errors?.handle?.message}
                      </p>
                    </div>
                    <div>
                      <label
                        htmlFor='bio'
                        className='mb-2 block text-sm dark:text-white'
                      >
                        Fill in some bio
                      </label>
                      <div className='relative'>
                        <textarea
                          {...register('bio')}
                          id='bio'
                          name='bio'
                          placeholder={placeHolderText}
                          className='block min-h-28 w-full rounded-lg border-gray-200 px-4 py-3 text-sm leading-6 focus:border-accent-pink-500 focus:ring-accent-pink-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600'
                          aria-describedby='bio-error'
                        />
                        {errors?.bio && <ErrorSvg />}
                      </div>
                      <p className='mt-2  text-xs text-red-600' id='bio-error'>
                        {errors?.bio?.message}
                      </p>
                    </div>
                    {/* <!-- End Form Group --> */}

                    <button
                      type='submit'
                      className='dark:focus-visible:ring-accent-gray-600 mt-3 inline-flex w-full items-center 
                    justify-center gap-x-2 rounded-lg 
                    border border-transparent bg-accent-pink-600 px-4 py-3 text-sm font-semibold text-white hover:bg-accent-pink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-pink-600 disabled:pointer-events-none disabled:opacity-50 dark:bg-accent-pink-900 dark:hover:bg-accent-pink-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                    >
                      Done
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
