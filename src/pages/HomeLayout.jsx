import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../components/Navbar.css'

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
export default HomeLayout
