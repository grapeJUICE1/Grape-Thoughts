import { Fragment, ReactNode } from 'react'
import Navbar from '../Navigation/Navbar'

function Layout({ children }: { children: ReactNode }) {
  return (
    <Fragment>
      <Navbar />
      {children}
    </Fragment>
  )
}

export default Layout
