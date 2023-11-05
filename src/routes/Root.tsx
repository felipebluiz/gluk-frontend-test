import { Outlet } from 'react-router-dom'

import { Navbar } from '@/components/Navbar'
import { Header } from '@/components/Header'
import { NavbarProvider } from '@/providers/NavbarProvider'

export default function Root() {
  return (
    <NavbarProvider>
      <Navbar />
      <div className="wrapper">
        <Header />
        <Outlet />
      </div>
    </NavbarProvider>
  )
}
