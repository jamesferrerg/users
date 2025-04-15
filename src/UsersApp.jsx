import { Navbar } from './ui/components'
import { Outlet } from 'react-router-dom'
export const UsersApp = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
