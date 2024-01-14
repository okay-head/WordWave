type T = {
  children: React.ReactNode
  classVars?: string
}

export default function Container({ children, classVars = ' ' }: T) {
  return (
    <div id='container' className={`mx-auto mt-20 px-6 pb-6 ${classVars}`}>
      {children}
    </div>
  )
}
