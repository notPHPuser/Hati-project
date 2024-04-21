import Main from './components/main/Main';
import ApartmentsPage from './pages/apartments/ApartmentsPage';
import Auth from './pages/auth/Auth';
import Create from './pages/create/Create';
import Profile from './pages/profile/Profile';
import { APARTMENTS, CREATE, LOGIN, MAIN, PROFILE, REGISTER } from './utilits/consts';

export const authRoutes = [
  {
    path: CREATE,
    element: <Create />,
  },
  {
    path: PROFILE,
    element: <Profile />,
  },
];

export const publicRoutes = [
  {
    path: MAIN,
    element: <Main />,
  },
  {
    path: LOGIN,
    element: <Auth />,
  },
  {
    path: REGISTER,
    element: <Auth />,
  },
  {
    path: APARTMENTS + '/:id',
    element: <ApartmentsPage />,
  },
];
