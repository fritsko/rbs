import {
  mdiMonitor,
  mdiAccountSettings,
  mdiAccountKey,
  mdiAccountEye,
  mdiAccountGroup,
  mdiArchivePlus
} from '@mdi/js'

export default [
  {
    route: 'dashboard',
    icon: mdiMonitor,
    label: 'Dashboard'
  },
  {
    icon: mdiAccountSettings,
    label: 'Admin',
    menu:[
      {
        route: 'permission.index',
        icon: mdiAccountKey,
        label: 'Permissions'
      },
      {
        route: 'role.index',
        icon: mdiAccountEye,
        label: 'Roles'
      },
      {
        route: 'user.index',
        icon: mdiAccountGroup,
        label: 'Users'
      },
    ]
  },
  {
    route: 'permission.index',
    icon: mdiArchivePlus,
    label: 'Product'
  },
 
  // {
  //   href: 'https://github.com/balajidharma/laravel-vue-admin-panel',
  //   label: 'GitHub',
  //   icon: mdiGithub,
  //   target: '_blank'
  // }
]
