// get set update delete
import {
  ref,
  get,
  getDatabase,
  connectDatabaseEmulator,
  set,
  update,
  push,
  child,
} from 'firebase/database'
import { app } from './firebaseApp'

const db = getDatabase(app)
connectDatabaseEmulator(db, 'localhost', 9000)

export const getFn = async (url: string = '') => {
  const data = await get(ref(db, url))
  if (!data.exists()) return Promise.reject('No data')
  return data.val()
}

export const setFn = async (url: string, payload: Tuser | Ttweet) => {
  const res = await get(ref(db, url))
  if (res.exists())
    return Promise.reject('Data already exists at this location\ndb/' + url)

  try {
    const res = set(ref(db, url), payload)
    return res
  } catch (error) {
    return Promise.reject(error)
  }
}
// idfk how do i type this
/* Tobj = {
  'asfs2424': 'string',
  payload: {}
}
 */
export const updateMultipleFn = async (object: any) => {
  /* No check for already existing data */
  // const res = await get(ref(db, url))
  // if (res.exists())
  //   return Promise.reject('Data already exists at this location\ndb/' + url)

  try {
    const res = update(ref(db), object)
    return res
  } catch (error) {
    return Promise.reject(error)
  }
}
type PTuser = Partial<Tuser>
export const updateData = async (url: string, payload: any) => {
  // ⚠ No checks
  try {
    const res = update(ref(db, url), payload)
    return res
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getKey = (url: string): string | undefined | null => {
  try {
    const key = push(child(ref(db), url)).key
    return key?.toString()
  } catch (error) {
    console.log(error)
    return undefined
  }
}
