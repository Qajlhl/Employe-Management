import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';
const SYSTEM:AppRouteRecordRaw = {
  path: '/system',
  name: 'system',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.system',
    requiresAuth: true,
    icon: 'icon-apps',
    order: 10,
  },
  children: [
    {
      path: 'roles',
      name: 'roles',
      component: () => import('@/views/system/roles/index.vue'),
      meta: {
        locale: 'menu.system.roles',
        requiresAuth: true,
        roles: ['*'],
      },
    },

    {
        path: 'users',
        name: 'users',
        component: () => import('@/views/system/users/index.vue'),
        meta: {
          locale: 'menu.system.users',
          requiresAuth: true,
          roles: ['*'],
        },
    },

    {
        path: 'menus',
        name: 'menus',
        component: () => import('@/views/system/menus/index.vue'),
        meta: {
          locale: 'menu.system.menus',
          requiresAuth: true,
          roles: ['*'],
        },
      },
  ],
}
export default SYSTEM;