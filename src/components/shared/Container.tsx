type T = {
  children: React.ReactNode
  classVars?: string
}

export default function Container({ children, classVars = ' ' }: T) {
  return (
    <div
      id='container'
      className={`mx-auto min-h-[calc(100vh-60px)] px-6 pt-7 ${classVars}`}
    >
      {children}
    </div>
  )
}
