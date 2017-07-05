import App from '../App'
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home');
const songlist = r => require.ensure([], () => r(require('../page/songlist/songlist')), 'songlist')

export default [{
  path: '/',
  component: home,
  children: [{
    path: '/Allen',
    component: home,
  } , {
    path: '/songlist',
    component: songlist,
  },
  ]
}]
