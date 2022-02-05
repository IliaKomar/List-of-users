import Users from '../pages/Users';
import UserInformation from '../pages/UserInformation';
import Preloader from '../pages/Preloader';

export const routes = [
    {
        path: '/',
        component: <Preloader />,
        id: 'preloader'
    },{
        path: '/users',
        component: <Users />,
        id: 'userLists'
    },
    {
        path: '/users/:userName',
        component: <UserInformation />,
        id: 'userInfo'
    }
]