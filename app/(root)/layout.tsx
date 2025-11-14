import { ReactNode } from "react"

const RootLayout = ({children}: {children : ReactNode}) => {
  return (
    <div>{children}
    <div>Hey</div>
    </div>
  )
}

export default RootLayout