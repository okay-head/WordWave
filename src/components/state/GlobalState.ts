import { create } from 'zustand'
type T = {
  auth: boolean
  setAuth: (val: boolean) => void
}
const useGlobalStore = create<T>()((set) => ({
  auth: false,
  setAuth: (val) => set(() => ({ auth: val })),
}))

export default useGlobalStore

/* -- Zustand syntax -- */
/* 
  - pull create from zustand

  - Make a store
  useStore = create(set=>(obj))
  obj = {
    count: 0,
    setCount: ()=>(set(Function))
  }

  Function = (state)=>({count: state.count + 1})  //first arg will always be the currentStateValue
*/
