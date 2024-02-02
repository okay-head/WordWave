import { app } from './firebaseApp'
import {
  getAuth,
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth'

const auth = getAuth(app)
connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true })

export const signUpFn = async (email: string, password: string) => {
  try {
    return await createUserWithEmailAndPassword(auth, email, password)
  } catch (error: any) {
    console.log(error)
    return Promise.reject(error.code)
  }
}
export const signOutFn = async () => {
  try {
    await signOut(auth)
  } catch (error: any) {
    console.log(error)
    return Promise.reject(error.code)
  }
}
export const signInFn = async (email: string, password: string) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password)
  } catch (error: any) {
    console.log(error)
    return Promise.reject(error.code)
  }
}

// disabled onAuthStateChanged, meaning we need to watch sign in state at three places in our app
// Signin  Signup
// but also Logout

/* const unsub = onAuthStateChanged(auth, (user) => {
  if (user) {
    // now we need a way to set context from here. we can't this is violating rule of hooks as this is not a functional component it sucks so we keep it in localstorage for now
    const obj = JSON.stringify({ uid: user.uid, email: user.email || '' })
    localStorage.setItem('firebaseAuthObj', obj)
  } else {
    localStorage.removeItem('firebaseAuthObj')
    console.log('Logged OUT')
  }
})
 */
// const signUpGoogle
// const signInGoogle
