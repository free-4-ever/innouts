const Player = () => import('pages/Player.vue')
// const Footer = () => import('components/Footer.vue')
// const Teammates = () => import('pages/Teammates.vue')
const Teammates = () => import('../components/Teammates.vue')

const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/players/:id',
    component: () => import('layouts/ID.vue'),
    children: [
      { path: '', components: { default: Player, helper: Teammates }, name: 'player' }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
