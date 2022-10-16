import { SignUp, Login, Home, Search } from '../pages'

export const Routes = [
  { path: '/', element: Home },
  { path: '/book-tickets', element: Home },
  { path: '/search-train', element: Search },
  { path: '/login', element: Login },
  { path: '/signup', element: SignUp }
]
