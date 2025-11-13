import { Home, Dashboard, Unlock } from 'pages';

export enum RouteNamesEnum {
  home = '/',
  dashboard = '/dashboard',
  unlock = '/unlock'
}

interface BasicRouteType {
  path: string;
  title: string;
  component: () => React.ReactNode;
  authenticatedRoute?: boolean;
}

export interface RouteType extends BasicRouteType {
  children?: BasicRouteType[];
}

export const routes: RouteType[] = [
  {
    path: RouteNamesEnum.home,
    title: 'Home',
    component: Home,
    children: [
      // since unlock is made trough a sidebar, we want to keep displaying the home page in the background
      {
        path: RouteNamesEnum.unlock,
        title: 'Unlock',
        component: Unlock
      }
    ]
  },
  {
    path: RouteNamesEnum.dashboard,
    title: 'Dashboard',
    component: Dashboard,
    authenticatedRoute: true
  }
];
