import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"

const RootLayout = ({children}: {children : ReactNode}) => {
  return (
    <div className="root-layout">
        <nav>
            <Link href='/'>
            <Image src='/logo.png' alt='logo' width={178} height={152}/>
            </Link>
        </nav>
        {children}
    </div>
  )
}

export default RootLayout