import { Outlet } from 'react-router-dom'
// import Navbar from '../components/Navbar'
// import '../components/Navbar.css'
import CompNavbar from '../components/CompNavbar'

const HomeLayout = () => {
  return (
    <>
      <CompNavbar />
      {/* <Navbar /> */}
      <Outlet />
    </>
  )
}
export default HomeLayout
