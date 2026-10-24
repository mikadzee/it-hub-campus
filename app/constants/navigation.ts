 interface Page {
  id: number;
  name: string;
  icon: string;
  path: string;
}

export const pages:Page[] = [
  {
    id: 1,
    name: 'Главная',
    icon: 'icon-home',
    path: '/'
  },
  {
    id: 2,
    name: 'События',
    icon: 'icon-calendar',
    path: '/events'
  },
  {
    id: 3,
    name: 'Идеи студентов',
    icon: 'icon-idea',
    path: '/ideas'
  },
  {
    id: 4,
    name: 'Люди',
    icon: 'icon-users',
    path: '/students'
  },
  {
    id: 5,
    name: 'Проекты',
    icon: 'icon-folder',
    path: '/projects'
  },
  {
    id: 6,
    name: 'Уведомления',
    icon: 'icon-bell',
    path: '/notifications'
  },
  {
    id: 7,
    name: 'Профиль',
    icon: 'icon-profile',
    path: '/profile'
  }
];
