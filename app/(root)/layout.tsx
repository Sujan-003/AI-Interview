import { isAuthenticated } from "@/lib/actions/auth.action"
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"
import { ReactNode } from "react"

const RootLayout = async ({children}: {children : ReactNode}) => {
  const isUserAuthenticated = await isAuthenticated();

  if(!isUserAuthenticated) redirect('/sign-in');
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