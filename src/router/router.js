import App from '../App'
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home');
const main = r => require.ensure([], () => r(require('../page/main/main')), 'main');
const search = r => require.ensure([], () => r(require('../page/search/search')), 'search');
const songsheet = r => require.ensure([], () => r(require('../page/songsheet/songsheet')), 'songsheet')

export default [{
  path: '/',
  component: App,
  children: [{
    path: '',
    component: home,
  },{
    path: '/home',
    component: home,
  },{
    path: '/search',
    component: search,
  },{
    path: '/songsheet',
    component: songsheet,
  }]
} 
]
