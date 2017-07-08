import App from '../App'
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home');
const main = r => require.ensure([], () => r(require('../page/main/main')), 'main');
const search = r => require.ensure([], () => r(require('../page/search/search')), 'search');
const songlist = r => require.ensure([], () => r(require('../page/songlist/songlist')), 'songlist')
const songsheet = r => require.ensure([], () => r(require('../page/songsheet/songsheet')), 'songsheet')
const songname = r => require.ensure([], () => r(require('../page/songname/songname')), 'songname')

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
    path: '/songlist',
    component: songlist,
  },{
    path: '/songsheet',
    component: songsheet,
  }]
},{
  path: '/songname',
  component: songname,
}
]
