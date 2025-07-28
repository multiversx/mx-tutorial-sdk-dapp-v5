import { Home } from "../pages/Home";

export enum RouteNamesEnum {
  home = "/",
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
    title: "Home",
    component: Home,
    children: [
      // Unlock page
    ],
  },
];
