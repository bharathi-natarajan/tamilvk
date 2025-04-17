import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {
  Landing,
  About,
  Books,
  Events,
  History,
  HomeLayout,
  Team,
} from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        // path: 'about',
        path: 'about',
        element: <About />,
      },
      {
        // path: 'history',
        path: 'அமைப்பு',
        element: <History />,
      },
      {
        // path: 'team',
        path: 'நிருவாகம்',
        element: <Team />,
      },
      {
        // path: 'events',
        path: 'நிகழ்வுகள்',
        element: <Events />,
      },
      {
        // path: 'books',
        path: 'வெளியீடுகள்',
        element: <Books />,
      },
    ],
  },
])

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 })
  }, [])
  return <RouterProvider router={router} />
}
export default App
