// get set update delete
import {
  ref,
  get,
  getDatabase,
  connectDatabaseEmulator,
  set,
} from 'firebase/database'
import { app } from './firebaseApp'

const db = getDatabase(app)
connectDatabaseEmulator(db, 'localhost', 9000)

export const getFn = async (url: string = '') => {
  const data = await get(ref(db, url))
  if (!data.exists()) return Promise.reject('No data')
  return data.val()
}

export const setFn = async (url: string, payload: userPayload) => {
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
