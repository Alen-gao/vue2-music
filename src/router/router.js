import App from '../App'
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')

export default [{
  path: '/',
  component: home,
  children: [{
    path: '/Allen',
    component: home,
  },
  ]
}]
