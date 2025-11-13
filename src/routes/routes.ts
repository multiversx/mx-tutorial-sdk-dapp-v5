import { RouteType } from 'types';
import { Home, Dashboard } from 'pages';

export enum RouteNamesEnum {
  home = '/',
  dashboard = '/dashboard'
}

interface BasicRouteType {
  path: string;
  title: string;
  component: () => React.ReactNode;
  authenticatedRoute?: boolean;
}

interface RouteType extends BasicRouteType {
  children?: BasicRouteType[];
}

export const routes: RouteType[] = [
  {
    path: RouteNamesEnum.home,
    title: 'Home',
    component: Home,
    children: [
      // Unlock page
    ]
  },
  {
    path: RouteNamesEnum.dashboard,
    title: 'Dashboard',
    component: Dashboard,
    authenticatedRoute: true
  }
];
