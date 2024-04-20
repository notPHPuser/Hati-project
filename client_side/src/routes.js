import Main from './components/main/Main';
import ApartmentsPage from './pages/apartments/ApartmentsPage';
import Auth from './pages/auth/Auth';
import Create from './pages/create/Create';
import Profile from './pages/profile/Profile';
import { APARTMENTS, CREATE, LOGIN, MAIN, PROFILE, REGISTER } from './utilits/consts';

export const authRoutes = [
  {
    path: CREATE,
    Component: Create,
  },
  {
    path: PROFILE,
    Component: Profile,
  },
];

export const publicRoutes = [
  {
    path: MAIN,
    Component: Main,
  },
  {
    path: LOGIN,
    Component: Auth,
  },
  {
    path: REGISTER,
    Component: Auth,
  },
  {
    path: APARTMENTS + '/:id',
    Component: ApartmentsPage,
  },
];
