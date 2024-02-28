/* HERE's how you create self contained components that also house render states */
import { useEffect, useState } from 'react'
import useGlobalStore from './../state/GlobalState'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { getFn, updateData } from '../../firebase/firebaseDb'
import toast from 'react-hot-toast'

export default function UserCard({
  user_id,
  user_name,
  user_handle,
  user_bio,
  user_followers,
  user_following,
}: Tuser) {
  const [isFollowing, setIsFollowing] = useState(false)
  const auth = useGlobalStore((state) => state.auth)
  const userObjContext = useGlobalStore((state) => state.user)
  const { user_id: currentUser_id, user_following: currentUser_following } =
    userObjContext
  const setUserObjContext = useGlobalStore((state) => state.setUser)

  useEffect(() => {
    // set the cards as isFollowing true first thing the component loads
    // re-render when new data comes in or during follow/unfollow
    const exists =
      currentUser_following.find((x) => x === user_id) == undefined
        ? false
        : true
    if (auth && exists) setIsFollowing(true)
  }, [currentUser_following, user_id])

  const handleClick = async () => {
    if (!auth) return
    // first disable click
    setIsFollowing(true)

    // 1. Update current user following
    // 2. Update target user follower count
    const updatePayload1 =
      currentUser_following[0] == '0'
        ? { ...[user_id] }
        : {
            ...[...currentUser_following, user_id],
          }
    // get the target user credentials
    try {
      const targetUser: Tuser = await getFn(`/users/${user_id}`)

      const updatePayload2 =
        targetUser.user_followers[0] == '0'
          ? { ...[currentUser_id] }
          : {
              ...[...targetUser.user_followers, currentUser_id],
            }

      //Promise.all for atomic updates
      Promise.all([
        updateData(`users/${currentUser_id}/user_following`, updatePayload1),
        updateData(`users/${user_id}/user_followers`, updatePayload2),
      ])

        .then(() => {
          //update context
          const newUser = {
            ...userObjContext,
            user_following: Object.values(updatePayload1) as string[],
          }

          setUserObjContext(newUser)
        })
        .catch((err) => {
          setIsFollowing(false)
          toast.error('Operation failed! Try again later')
          console.log(err)
        })
    } catch (error) {
      setIsFollowing(false)
      toast.error('Cannot fetch user')
      console.log(error)
    }
  }
  return (
    <article className='card mt-8'>
      <div className='flex flex-col rounded-xl border bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-slate-900 dark:shadow-slate-700/[.7] md:p-5'>
        <section className='card-header flex'>
          <div className='flex items-center gap-4'>
            <img
              className='ms-1 mt-[2px] inline-block h-9 w-9 self-start rounded-full'
              src='/assets/user.webp'
              alt='avatar'
            />
            <div>
              <h3 className='text-lg font-semibold text-gray-800 dark:text-white'>
                {user_name == 'null' ? (
                  <Skeleton
                    baseColor='#d8d9d9'
                    highlightColor='#e5e6e6'
                    height={'1.125rem'}
                    width={'8rem'}
                  />
                ) : (
                  user_name
                )}
              </h3>
              <p className='-mt-[2px] text-xs font-medium text-accent-pink-500 dark:text-accent-pink-900'>
                {user_handle == 'null' ? (
                  <Skeleton
                    baseColor='#d8d9d9'
                    highlightColor='#e5e6e6'
                    height={'0.75rem'}
                    width={'5rem'}
                  />
                ) : (
                  user_handle
                )}
              </p>
            </div>
          </div>
          {isFollowing ? (
            <div className='group relative ms-auto'>
              <button
                disabled
                onClick={handleClick}
                className='inline-flex select-none items-center gap-2 gap-x-1.5 rounded-full bg-accent-pink-500 px-3 py-2 text-xs font-medium text-white transition-all hover:bg-accent-pink-600 disabled:pointer-events-none disabled:opacity-50 dark:bg-accent-pink-900 sm:mt-1.5'
              >
                <span>
                  <img
                    src='/assets/icons8-tick-48.png'
                    alt=''
                    className='w-4'
                  />
                </span>
                <span>FOLLOWING</span>
              </button>
            </div>
          ) : (
            <div className='group relative ms-auto'>
              <button
                disabled={auth && user_id == currentUser_id}
                onClick={handleClick}
                className='inline-flex select-none items-center gap-2 gap-x-1.5 rounded-full bg-accent-pink-500 px-3 py-2 text-xs font-medium text-white transition-all hover:bg-accent-pink-600 disabled:pointer-events-none disabled:opacity-50 dark:bg-accent-pink-900 sm:mt-1.5'
              >
                <span>
                  <img
                    src='/assets/icons8-plus-48.png'
                    alt=''
                    className='w-4'
                  />
                </span>
                <span>FOLLOW</span>
              </button>
              {!auth && (
                <p className='absolute left-[53%] top-0 w-20 -translate-x-1/2 translate-y-0 select-none text-[10px] text-[--text-base] opacity-0 transition-all group-hover:-translate-y-[10px] group-hover:opacity-100'>
                  Sign in to follow
                </p>
              )}
            </div>
          )}
        </section>

        <div className='ms-14 mt-2 text-gray-500 dark:text-gray-400'>
          {user_bio === 'null' ? (
            <Skeleton
              baseColor='#d8d9d9'
              highlightColor='#e5e6e6'
              height={'1rem'}
              width={'100%'}
              count={2}
            />
          ) : (
            user_bio
          )}
        </div>

        <div className='chips ms-14 mt-7 flex gap-3 text-sm text-gray-500 dark:text-gray-400'>
          <span className='border-r pr-3'>
            {user_followers[0] == 'null' ? (
              <Skeleton
                baseColor='#d8d9d9'
                highlightColor='#e5e6e6'
                height={'1.2rem'}
                width={'5.5rem'}
              />
            ) : (
              <p>
                <b className='font-semibold'>
                  {user_followers[0] == '0' ? 0 : user_followers?.length}
                </b>{' '}
                Followers
              </p>
            )}
          </span>
          <span>
            {user_following[0] == 'null' ? (
              <Skeleton
                baseColor='#d8d9d9'
                highlightColor='#e5e6e6'
                height={'1.2rem'}
                width={'5.5rem'}
              />
            ) : (
              <p>
                <b className='font-semibold'>
                  {user_following[0] == '0' ? 0 : user_following?.length}
                </b>{' '}
                Following
              </p>
            )}
          </span>
        </div>
      </div>
    </article>
  )
}
