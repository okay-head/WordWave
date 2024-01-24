import { app } from './firebaseApp'
import {
  getAuth,
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

const auth = getAuth(app)
connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: false })

export const signUpFn = async (email: string, password: string) => {
  try {
    return await createUserWithEmailAndPassword(auth, email, password)
  } catch (error) {
    console.log(error)
  }
}
export const signOutFn = async () => {
  try {
    await signOut(auth)
  } catch (error) {
    console.log(error)
  }
}
// const signUpGoogle
// const signIn
// const signInGoogle
